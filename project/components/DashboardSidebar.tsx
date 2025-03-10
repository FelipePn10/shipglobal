import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  User, 
  Package, 
  ShoppingBag, 
  Users, 
  Headphones, 
  Send, 
  Truck, 
  HelpCircle, 
  Link as LinkIcon,
  FileText
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: User, label: 'Minha Conta', href: '/dashboard/account' },
  { icon: Package, label: 'Minha Carteira', href: '/dashboard/wallet' },
  { icon: ShoppingBag, label: 'Loja', href: '/dashboard/store' },
  { icon: Users, label: 'Grupo de Compras', href: '/dashboard/group' },
  { icon: Headphones, label: 'Serviços Contratados', href: '/dashboard/services' },
  { icon: Package, label: 'Minha Suite', href: '/dashboard/suite' },
  { icon: Truck, label: 'Caixas Recebidas', href: '/dashboard/packages' },
  { icon: Send, label: 'Envios', href: '/dashboard/shipments' },
  { icon: Package, label: 'Simulador de Frete', href: '/dashboard/simulator' },
  { icon: HelpCircle, label: 'FAQ', href: '/dashboard/faq' },
  { icon: LinkIcon, label: 'Afiliados', href: '/dashboard/affiliates' },
  { icon: FileText, label: 'Termos de Uso', href: '/dashboard/terms' },
];

export const DashboardSidebar = () => {
  const pathname = usePathname();
  
  return (
    <aside className="w-64 hidden lg:block bg-white border-r border-blue-100 p-4">
      <div className="mb-6">
        <div className="bg-blue-600 text-white p-6 rounded-xl flex items-center justify-between">
          <div>
            <div className="text-sm opacity-80">SUITE</div>
            <div className="text-2xl font-bold">6037</div>
            <div className="mt-1">Felipe</div>
          </div>
          <Package className="h-8 w-8" />
        </div>
      </div>
      
      <nav>
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};