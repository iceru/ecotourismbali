import React from 'react';
import { Link } from '@inertiajs/react';
import { isEmpty } from 'lodash';

export default function Pagination({ links }) {
  function getClassName(active) {
    if (active) {
      return 'mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white hover:text-primary border-primary focus:border-primary focus:text-primary bg-primary text-white';
    } else {
      return 'mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary hover:text-primary hover:border-primary';
    }
  }

  return (
    !isEmpty(links) && (
      <div className="mb-4">
        <div className="flex flex-wrap mt-8">
          {links.map((link, key) =>
            link.url === null ? (
              <div
                key={key}
                className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
              >
                <span dangerouslySetInnerHTML={{ __html: link.label }}></span>
              </div>
            ) : (
              <Link className={getClassName(link.active)} href={link.url}>
                <span dangerouslySetInnerHTML={{ __html: link.label }}></span>
              </Link>
            )
          )}
        </div>
      </div>
    )
  );
}
