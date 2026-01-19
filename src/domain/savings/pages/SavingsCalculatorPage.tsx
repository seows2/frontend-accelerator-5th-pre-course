import { Border, NavigationBar, Spacing } from 'tosslib';
import { NumberField, Select } from '@shared/ui';
import { useSavingsForm } from '@savings/hooks';
import { SavingsTabs } from '@savings/components/SavingsTabs';

function SavingsCalculatorPage() {
  const { savingsForm, updateSavingsForm } = useSavingsForm();

  const { goalAmount, monthlySaving, savingPeriod } = savingsForm;

  return (
    <>
      <NavigationBar title="적금 계산기" />
      <Spacing size={16} />
      <NumberField
        label="목표 금액"
        value={goalAmount}
        onChange={val => updateSavingsForm({ goalAmount: val })}
        placeholder="목표 금액을 입력하세요"
        suffix="원"
      />
      <Spacing size={16} />
      <NumberField
        label="월 납입액"
        value={monthlySaving}
        onChange={val => updateSavingsForm({ monthlySaving: val })}
        placeholder="희망 월 납입액을 입력하세요"
        suffix="원"
      />
      <Spacing size={16} />
      <Select
        value={savingPeriod}
        onChange={val => updateSavingsForm({ savingPeriod: val })}
        label="저축 기간"
        title="저축 기간을 선택해주세요"
        options={[
          { label: '6개월', value: 6 },
          { label: '12개월', value: 12 },
          { label: '24개월', value: 24 },
        ]}
      />
      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />
      <SavingsTabs savingsForm={savingsForm} />
    </>
  );
}

export default SavingsCalculatorPage;
