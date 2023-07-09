import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal.js';

import { Button } from '@/components/Button/Button.js';

type Story = StoryObj<typeof Modal>;

const meta: Meta<typeof Modal> = {
  component: Modal,
  args: {
    open: true,
    title: 'Terms and Conditions',
    onClose: () => alert('Close!')
  }
};

export default meta;

export const Default: Story = {
  args: {
    children: (
      <>
        <div className="mt-2">
          <p className="text-sm text-gray-500">Please indicate whether you accept our terms and conditions</p>
        </div>

        <div className="mt-4 flex">
          <Button className="mr-2" label="Accept" variant="primary" />
          <Button label="Decline" variant="secondary" />
        </div>
      </>
    )
  }
};
