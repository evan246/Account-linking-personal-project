export interface CardMetric {
  title: string;
  value: number;
  icon: string;
  colorClass: string;
  bgClass: string;
  isPrimary?: boolean;
  route: string;
}

export interface FilterOption {
  label: string;
  value: string;
}
