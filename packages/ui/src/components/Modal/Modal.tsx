'use client';

import React from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { clsx } from 'clsx';

export type ModalProps = {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  width?: 'sm' | 'md' | 'lg' | 'xl';
};

export const Modal = ({ open, title, children, onClose, width = 'md' }: ModalProps) => {
  return (
    <Transition appear as={React.Fragment} show={open}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={clsx(
                  'w-full transform overflow-visible rounded-2xl bg-slate-100 dark:bg-slate-800 p-6 text-left align-middle shadow-xl transition-all',
                  {
                    'max-w-sm': width === 'sm',
                    'max-w-md': width === 'md',
                    'max-w-lg': width === 'lg',
                    'max-w-xl': width === 'xl'
                  }
                )}
              >
                <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-slate-900 dark:text-slate-100">
                  {title}
                </Dialog.Title>
                <div className="my-3">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
