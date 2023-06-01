import { Link, useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Table({
  header,
  data,
  selectedData,
  tableButtons,
  tableActions,
  pathImage,
}) {
  const { delete: destroy, processing } = useForm();

  const { t } = useTranslation();

  const buttonColor = color => {
    switch (color) {
      case 'submit':
        return 'bg-green-500 hover:bg-green-600 active:bg-green-600';
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 active:bg-red-600';
      case 'info':
        return 'bg-blue-500 hover:bg-blue-600 active:bg-blue-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600 active:bg-gray-600';
    }
  };

  const deleteData = (e, id, routeData) => {
    e.preventDefault();
    confirm(t('confirm_delete')) && destroy(route(routeData, id));
  };

  return (
    <div className="">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="mb-6">
            <div className="relative max-w-xs">
              <label htmlFor="hs-table-search" className="sr-only">
                {t('search')}
              </label>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md "
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg
                  className="h-3.5 w-3.5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {header.map((item, index) => {
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
                  {data?.map((item, index) => {
                    return (
                      <tr key={index}>
                        {selectedData.map((column, index) => {
                          return (
                            <td
                              key={index}
                              className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                            >
                              {column === 'image' ? (
                                <img
                                  src={`/storage/${pathImage}${item[column]}`}
                                />
                              ) : (
                                item[column]
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
                          <td className="grid gap-2 py-3 px-2 items-center">
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
                                  className={`px-2 py-1 mr-2 text-sm block text-center font-medium leading-5 w-full text-white transition-colors duration-150 border border-transparent rounded-lg  focus:outline-none focus:shadow-outline-green ${buttonColor(
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
      </div>
    </div>
  );
}
