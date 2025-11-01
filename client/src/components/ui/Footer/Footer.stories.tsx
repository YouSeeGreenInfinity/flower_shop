// components/Footer/Footer.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

// Дополнительные сторисы для демонстрации разных состояний
export const WithAllColumnsTitled: Story = {
  render: () => {
    // Для демонстрации альтернативного варианта в сторибуке
    return (
      <div>
        <Footer />
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5', marginTop: '20px' }}>
          <p>Примечание: В этой стори показан стандартный футер. Для изменения данных нужно редактировать компонент Footer.tsx</p>
        </div>
      </div>
    );
  }
};

export const Minimal: Story = {
  render: () => {
    return (
      <div>
        <Footer />
        <div style={{ padding: '20px', backgroundColor: '#f5f5f5', marginTop: '20px' }}>
          <p>Минимальная версия футера с текущими настройками</p>
        </div>
      </div>
    );
  }
};