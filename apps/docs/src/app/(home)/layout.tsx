import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
