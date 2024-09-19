import SidebarNav from "@/components/setting/SidebarNav";
import { Separator } from "@/components/ui/separator";
import {
  IconBrowserCheck,
  IconExclamationCircle,
  IconNotification,
  IconPalette,
  IconTool,
  IconUser,
} from "@tabler/icons-react";
export default async function SettingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarNavItems = [
    {
      title: "Profile",
      icon: <IconUser size={18} />,
      href: "/settings",
    },
    {
      title: "Account",
      icon: <IconTool size={18} />,
      href: "/settings/account",
    },
    {
      title: "Appearance",
      icon: <IconPalette size={18} />,
      href: "/settings/appearance",
    },
    {
      title: "Notifications",
      icon: <IconNotification size={18} />,
      href: "/settings/notifications",
    },
    {
      title: "Display",
      icon: <IconBrowserCheck size={18} />,
      href: "/settings/display",
    },
    {
      title: "Error Example",
      icon: <IconExclamationCircle size={18} />,
      href: "/settings/error-example",
    },
  ];
  return (
    <div className=" h-full overflow-auto flex flex-col fixed">
      <div className=" mt-1 px-4 md:overflow-hidden md:px-8 flex flex-col">
        <div className="space-y-0.5">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-4 lg:my-5" />
        <div className="flex flex-1 flex-col space-y-8 md:space-y-2 md:overflow-hidden lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="top-0 lg:sticky lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex w-full pb-20 md:pb-10 p-1 pr-4 md:overflow-y-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
