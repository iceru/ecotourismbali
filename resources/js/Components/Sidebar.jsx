import {
  faAward,
  faBarChart,
  faBoxArchive,
  faChartArea,
  faDollar,
  faFileClipboard,
  faHome,
  faListAlt,
  faPencilRuler,
  faPencilSquare,
  faTasks,
  faUsers,
  faUsersBetweenLines,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';
import { faSourcetree } from '@fortawesome/free-brands-svg-icons';
import { Link, usePage } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
  const { url } = usePage();
  const { t, i18n } = useTranslation();

  const { superadmin } = usePage().props;

  return (
    <nav className="navigation text-etbGray">
      <ul className="flex flex-col gap-6">
        <li>
          <Link
            href={route('admin.dashboard')}
            className={url.startsWith('/admin/dashboard') ? 'font-bold' : ''}
          >
            <FontAwesomeIcon
              className="fa-fw mr-2 text-secondary"
              icon={faHome}
            />
            {t('home')}
          </Link>
        </li>
        <li>
          <Link
            href={route('admin.member.index')}
            className={url.startsWith('/admin/member') ? 'font-bold' : ''}
          >
            <FontAwesomeIcon
              className="fa-fw mr-2 text-secondary"
              icon={faUsers}
            />
            {t('member')}
          </Link>
        </li>
        <li>
          <Link
            href={route('admin.member_tourism.index')}
            className={
              url.startsWith('/admin/tourism/member') ? 'font-bold' : ''
            }
          >
            <FontAwesomeIcon
              className="fa-fw mr-2 text-secondary"
              icon={faUsersBetweenLines}
            />
            {t('member_tourism')}
          </Link>
        </li>
        <li>
          <Link
            href={route('source.index')}
            className={url.startsWith('/admin/source') ? 'font-bold' : ''}
          >
            <FontAwesomeIcon
              className="fa-fw mr-2 text-secondary"
              icon={faSourcetree}
            />
            {t('tourism_source')}
          </Link>
        </li>
        {superadmin && (
          <>
            <li>
              <Link
                href={route('admin.payment.index')}
                className={url.startsWith('/admin/payment') ? 'font-bold' : ''}
              >
                <FontAwesomeIcon
                  className="fa-fw mr-2 text-secondary"
                  icon={faDollar}
                />
                {t('payment')}
              </Link>
            </li>
            <li>
              <Link
                href={route('assessment.index')}
                className={
                  url.match(/^\/admin\/assessment(\/|$)/) ? 'font-bold' : ''
                }
              >
                <FontAwesomeIcon
                  className="fa-fw mr-2 text-secondary"
                  icon={faPencilRuler}
                />
                {t('assessment')}
              </Link>
            </li>
            <li>
              <Link
                href={route('assessment2.index')}
                className={
                  url.match(/^\/admin\/assessment-2(\/|$)/) ? 'font-bold' : ''
                }
              >
                <FontAwesomeIcon
                  className="fa-fw mr-2 text-secondary"
                  icon={faPencilSquare}
                />
                {t('assessment_2')}
              </Link>
            </li>
          </>
        )}
        <li>
          <Link
            href={route('module.index')}
            className={url.startsWith('/admin/module') ? 'font-bold' : ''}
          >
            <FontAwesomeIcon
              className="fa-fw mr-2 text-secondary"
              icon={faFileClipboard}
            />
            {t('module_test')}
          </Link>
        </li>
        <li>
          <Link
            href={route('category.index')}
            className={url.startsWith('/admin/category') ? 'font-bold' : ''}
          >
            <FontAwesomeIcon
              className="fa-fw mr-2 text-secondary"
              icon={faListAlt}
            />
            {t('category')}
          </Link>
        </li>
        <li>
          <Link
            href={route('productCategory.index')}
            className={
              url.startsWith('/admin/product-category') ? 'font-bold' : ''
            }
          >
            <FontAwesomeIcon
              className="fa-fw mr-2 text-secondary"
              icon={faBoxArchive}
            />
            {t('product_category')}
          </Link>
        </li>
        <li>
          <Link
            href={route('program.index')}
            className={url.startsWith('/admin/program') ? 'font-bold' : ''}
          >
            <FontAwesomeIcon
              className="fa-fw mr-2 text-secondary"
              icon={faTasks}
            />
            {t('program')}
          </Link>
        </li>
        <li>
          <Link
            href={route('badge.index')}
            className={url.startsWith('/admin/badge') ? 'font-bold' : ''}
          >
            <FontAwesomeIcon
              className="fa-fw mr-2 text-secondary"
              icon={faAward}
            />
            {t('badge')}
          </Link>
        </li>
        <li>
          <Link
            href={route('verified_badge.index')}
            className={
              url.startsWith('/admin/verified-badge') ? 'font-bold' : ''
            }
          >
            <FontAwesomeIcon
              className="fa-fw mr-2 text-secondary"
              icon={faAward}
            />
            {t('verified_badge')}
          </Link>
        </li>
        <li>
          <Link
            href={route('statistic.index')}
            className={url.startsWith('/admin/statistic') ? 'font-bold' : ''}
          >
            <FontAwesomeIcon
              className="fa-fw mr-2 text-secondary"
              icon={faBarChart}
            />
            {t('statistic')}
          </Link>
        </li>
        <li>
          <Link
            href={route('statistic.assessment')}
            className={
              url.match('/admin/assessment/statistic') ? 'font-bold' : ''
            }
          >
            <FontAwesomeIcon
              className="fa-fw mr-2 text-secondary"
              icon={faChartArea}
            />
            {t('statistic_assessment')}
          </Link>
        </li>
        <li>
          <Link
            href={route('announcement.index')}
            className={url.startsWith('/admin/announcement') ? 'font-bold' : ''}
          >
            <FontAwesomeIcon
              className="fa-fw mr-2 text-secondary"
              icon={faVolumeUp}
            />
            {t('announcements')}
          </Link>
        </li>
        {superadmin && (
          <li>
            <Link
              href={route('register.admin')}
              className={url.startsWith('/admin/register') ? 'font-bold' : ''}
            >
              <FontAwesomeIcon
                className="fa-fw mr-2 text-secondary"
                icon={faUsers}
              />
              {t('register_admin')}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
