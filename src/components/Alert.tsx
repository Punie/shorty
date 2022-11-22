import clsx from 'clsx';
import React from 'react';
import { TbAlertCircle } from 'react-icons/tb';

export default function Alert({
  title,
  className,
  children,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx('relative rounded-lg bg-red-50 p-4 pl-14', className)}>
      <div className="absolute top-4 left-4 text-red-600">
        <TbAlertCircle size={24} />
      </div>

      {title && <div className="mb-2 font-bold text-red-600">{title}</div>}

      {children}
    </div>
  );
}
