import { Assets, colors, ListRow, Text } from 'tosslib';
import { commaizeNumber } from '@shared/utils';
import type { SavingsProduct } from '@savings/apis/type';

type ProductListItemProps = {
  savingsProduct: SavingsProduct;
  selected?: boolean;
  onClick?: (savingsProduct: SavingsProduct) => void;
};

export const ProductListItem = ({ savingsProduct, selected, onClick }: ProductListItemProps) => {
  const { name, annualRate, minMonthlyAmount, maxMonthlyAmount, availableTerms } = savingsProduct;

  return (
    <ListRow
      contents={
        <ListRow.Texts
          type="3RowTypeA"
          top={
            <Text fontSize={16} fontWeight="bold" color={colors.grey900}>
              {name}
            </Text>
          }
          middle={
            <Text fontSize={14} color={colors.blue600} fontWeight="medium">
              연 이자율: {annualRate}%
            </Text>
          }
          bottom={
            <Text fontSize={13} color={colors.grey600}>
              {commaizeNumber(minMonthlyAmount)}원 ~ {commaizeNumber(maxMonthlyAmount)}원 | {availableTerms}개월
            </Text>
          }
        />
      }
      right={selected && <Assets.Icon name="icon-check-circle-green" />}
      onClick={() => onClick?.(savingsProduct)}
    />
  );
};
