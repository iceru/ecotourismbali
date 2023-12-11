import { useEffect, useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import useTable from '@/Hooks/useTable';
import TableFooter from './TableFooter';

export default function Table({
  header,
  data,
  selectedData,
  secondaryData,
  tableButtons,
  tableActions,
  pathImage,
  customData,
  selectedSecondaryData,
  descHtml,
}) {
  const { delete: destroy, processing } = useForm();

  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, 10);

  const { t } = useTranslation();

  const buttonColor = color => {
    switch (color) {
      case 'submit':
        return 'bg-green-500 hover:bg-green-600 active:bg-green-600';
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 active:bg-red-600';
      case 'info':
        return 'bg-blue-500 hover:bg-blue-600 active:bg-blue-600';
      case 'show':
        return 'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600 active:bg-gray-600';
    }
  };

  const deleteData = (e, id, routeData) => {
    e.preventDefault();
    confirm(t('confirm_delete')) && destroy(route(routeData, id));
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="w-full inline-block align-middle ">
          <div className="overflow-x-auto border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    No.
                  </th>
                  {header?.map((item, index) => {
                    return (
                      <th
                        key={index}
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {slice?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">
                        {index + 1 + (page > 1 ? 10 * (page - 1) : 0)}
                      </td>
                      {selectedData?.map((column, index) => {
                        return (
                          <td
                            key={index}
                            className="px-6 py-4 text-sm font-medium text-gray-800"
                          >
                            {column === 'image' ? (
                              item[column] ? (
                                <img
                                  src={`/storage/${pathImage}${item[column]}`}
                                  className="max-h-24"
                                />
                              ) : (
                                <span>-</span>
                              )
                            ) : descHtml && column === descHtml ? (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item[column],
                                }}
                                className="descOverflow"
                              ></div>
                            ) : item[column] ? (
                              <span className="line-clamp-4">
                                {item[column]}
                              </span>
                            ) : (
                              '-'
                            )}
                          </td>
                        );
                      })}
                      {selectedSecondaryData?.map((column, index) => {
                        return (
                          <td
                            key={index}
                            className="px-6 py-4 text-sm font-medium text-gray-800"
                          >
                            {column === 'image' ? (
                              item[secondaryData][column] ? (
                                <img
                                  src={`/storage/${pathImage}${item[secondaryData][column]}`}
                                  className="max-h-24"
                                />
                              ) : (
                                <span>-</span>
                              )
                            ) : descHtml && column === descHtml ? (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item[secondaryData][column],
                                }}
                                className="descOverflow"
                              ></div>
                            ) : item[secondaryData][column] ? (
                              item[secondaryData][column]
                            ) : (
                              '-'
                            )}
                          </td>
                        );
                      })}

                      {tableButtons &&
                        tableButtons?.map((button, index) => {
                          return (
                            <td
                              key={index}
                              className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                            >
                              <Link
                                href={button.link + item.id + button.link2}
                                className="px-3 py-2 mr-2 text-sm font-medium leading-5 text-etbGray transition-colors duration-150 bg-lightSecondary border border-transparent rounded-lg hover:opacity-80 focus:outline-none focus:shadow-outline-green"
                              >
                                {t(button.label)}
                              </Link>
                            </td>
                          );
                        })}

                      {tableActions && (
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {tableActions.map((action, index) => {
                            return action.type === 'delete' ? (
                              <form
                                onSubmit={e =>
                                  deleteData(e, item.id, action.route)
                                }
                              >
                                <button
                                  disabled={processing}
                                  key={index}
                                  className={`px-2 py-1 mr-2 text-sm block text-center font-medium leading-5 w-full text-white transition-colors duration-150 border border-transparent rounded-lg  focus:outline-none focus:shadow-outline-green ${buttonColor(
                                    action.color
                                  )}`}
                                >
                                  {t(action.label)}
                                </button>
                              </form>
                            ) : (
                              <Link
                                href={`${action.link}${
                                  action.withId ? '/' + item.id : ''
                                }`}
                                key={index}
                                className={`px-2 py-1 mr-2 text-sm block text-center font-medium leading-5 w-full mb-2 text-white transition-colors duration-150 border border-transparent rounded-lg  focus:outline-none focus:shadow-outline-green ${buttonColor(
                                  action.color
                                )}`}
                              >
                                {t(action.label)}
                              </Link>
                            );
                          })}
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
}
