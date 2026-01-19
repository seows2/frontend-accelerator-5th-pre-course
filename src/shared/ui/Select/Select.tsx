import { SelectBottomSheet } from 'tosslib';

export type SelectProps<T extends string | number> = {
  /**
   * 버튼 상단에 노출할 라벨
   */
  label?: string;
  /**
   * 바텀싯에 표시할 타이틀
   */
  title: string;
  /**
   * 바텀싯에 표시할 옵션 목록
   */
  options: Array<OptionProps<T>>;
  /**
   * 현재 선택된 값
   */
  value?: T;
  /**
   * 선택값이 변경되었을 때 호출되는 콜백
   */
  onChange: (value: T) => void;
  className?: string;
};

type OptionProps<T> = {
  label: string;
  value: T;
};

export function Select<T extends string | number>(props: SelectProps<T>) {
  const { options, ...rest } = props;

  return (
    <SelectBottomSheet {...rest}>
      {options.map(o => (
        <SelectBottomSheet.Option key={o.value} value={o.value}>
          {o.label}
        </SelectBottomSheet.Option>
      ))}
    </SelectBottomSheet>
  );
}
