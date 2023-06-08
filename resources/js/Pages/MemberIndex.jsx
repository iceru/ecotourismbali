import Guest from '@/Layouts/GuestLayout';
import React from 'react';

function MemberIndex() {
  return (
    <Guest>
      <h1>Members Index</h1>
      <div>
        <ul className="flex justify-between items-center">
          <li>
            <a href="">#</a>
          </li>
          <li>
            <a href="">A</a>
          </li>
          <li>
            <a href="">B</a>
          </li>
          <li>
            <a href="">C</a>
          </li>
          <li>
            <a href="">D</a>
          </li>
        </ul>
      </div>
      <div className="grid lg:grid-cols-4 gap-8">
        <div>
          <div className="font-bold text-3xl text-primary">A</div>
          <ul className="mt-4">
            <li>
              <a href="">Member 1</a>
            </li>
            <li>
              <a href="">Member 2</a>
            </li>
            <li>
              <a href="">Member 3</a>
            </li>
          </ul>
        </div>
      </div>
    </Guset>
  );
}

export default MemberIndex;
