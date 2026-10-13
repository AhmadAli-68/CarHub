'use client';

import { Fragment } from 'react';
import Image from 'next/image';

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';

import { CarProps } from '@/types';

interface CarDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}

const CarDetails = ({
  isOpen,
  closeModel,
  car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='z-10 relative'
          onClose={closeModel}
        >
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </TransitionChild>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full justify-center items-center p-4 text-center'>
              <TransitionChild
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5 scroll-auto'>
                  <button
                    type='button'
                    onClick={closeModel}
                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full cursor-pointer'
                  >
                    <Image src='/close.svg' alt='close' width={20} height={20} className='object-contain' />
                  </button>

                  <div className='flex flex-1 flex-col gap-3'>
                    <div className='relative w-full h-40 bg-pattern bg-cover bg-center'>
                      <Image
                        src='/hero.png'
                        alt='car'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>

                    <div className='flex gap-3'>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src='/hero.png'
                          alt='car'
                          fill
                          priority
                          className='object-contain'
                        />
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src='/hero.png'
                          alt='car'
                          fill
                          priority
                          className='object-contain'
                        />
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src='/hero.png'
                          alt='car'
                          fill
                          priority
                          className='object-contain'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col flex-1 gap-2'>
                    <h2 className='font-semibold text-xl capitalize'>
                      {car.make} {car.model}
                    </h2>

                    <div className='mt-3 flex flex-wrap gap-4'>
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          key={key}
                          className='flex justify-between w-full text-right'
                        >
                          <h4 className='text-grey capitalize'>{key.split('_').join(' ')}</h4>
                          <p className='text-black-100 font-semibold'>{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails