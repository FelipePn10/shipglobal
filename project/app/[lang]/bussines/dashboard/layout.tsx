"use client"

import React, { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Package, BarChart3, Truck, FileText, Users, CreditCard, Settings, Bell, LogOut, Menu, X, ChevronDown, Globe, HelpCircle, Home, Inbox, Calendar, Search, ShoppingCart, Layers, AlertCircle, Briefcase, Building2 } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuShortcut
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarMenuBadge, 
  SidebarMenuSub, 
  SidebarMenuSubItem, 
  SidebarMenuSubButton, 
  SidebarProvider, 
  SidebarTrigger,
  SidebarRail
} from "@/components/ui/sidebar"

// Translation content
const translations = {
  en: {
    dashboard: "Dashboard",
    overview: "Overview",
    shipments: "Shipments",
    activeShipments: "Active Shipments",
    pendingShipments: "Pending Shipments",
    completedShipments: "Completed Shipments",
    orders: "Orders",
    createOrder: "Create Order",
    orderHistory: "Order History",
    drafts: "Drafts",
    imports: "Imports",
    importProcess: "Import Process",
    customsClearance: "Customs Clearance",
    consolidation: "Consolidation",
    tracking: "Tracking",
    trackShipment: "Track Shipment",
    analytics: "Analytics",
    reports: "Reports",
    performance: "Performance",
    billing: "Billing",
    invoices: "Invoices",
    payments: "Payments",
    subscriptions: "Subscriptions",
    team: "Team",
    members: "Members",
    roles: "Roles",
    invitations: "Invitations",
    documents: "Documents",
    importDocs: "Import Documents",
    customsForms: "Customs Forms",
    invoicesDocs: "Invoices",
    settings: "Settings",
    account: "Account",
    preferences: "Preferences",
    notifications: "Notifications",
    security: "Security",
    integrations: "Integrations",
    help: "Help & Support",
    knowledgeBase: "Knowledge Base",
    contactSupport: "Contact Support",
    faqs: "FAQs",
    search: "Search...",
    profile: "Profile",
    logout: "Logout",
    language: "Language",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    welcomeBack: "Welcome back",
    viewProfile: "View profile",
    shortcuts: "Shortcuts",
    newOrder: "New Order",
    newImport: "New Import",
    trackPackage: "Track Package",
    viewReports: "View Reports",
    businessPortal: "Business Portal",
    backToWebsite: "Back to Website",
    unreadMessages: "unread messages",
    pendingTasks: "pending tasks"
  },
  pt: {
    dashboard: "Painel",
    overview: "Visão Geral",
    shipments: "Remessas",
    activeShipments: "Remessas Ativas",
    pendingShipments: "Remessas Pendentes",
    completedShipments: "Remessas Concluídas",
    orders: "Pedidos",
    createOrder: "Criar Pedido",
    orderHistory: "Histórico de Pedidos",
    drafts: "Rascunhos",
    imports: "Importações",
    importProcess: "Processo de Importação",
    customsClearance: "Desembaraço Aduaneiro",
    consolidation: "Consolidação",
    tracking: "Rastreamento",
    trackShipment: "Rastrear Remessa",
    analytics: "Análises",
    reports: "Relatórios",
    performance: "Desempenho",
    billing: "Faturamento",
    invoices: "Faturas",
    payments: "Pagamentos",
    subscriptions: "Assinaturas",
    team: "Equipe",
    members: "Membros",
    roles: "Funções",
    invitations: "Convites",
    documents: "Documentos",
    importDocs: "Documentos de Importação",
    customsForms: "Formulários Aduaneiros",
    invoicesDocs: "Faturas",
    settings: "Configurações",
    account: "Conta",
    preferences: "Preferências",
    notifications: "Notificações",
    security: "Segurança",
    integrations: "Integrações",
    help: "Ajuda e Suporte",
    knowledgeBase: "Base de Conhecimento",
    contactSupport: "Contatar Suporte",
    faqs: "Perguntas Frequentes",
    search: "Buscar...",
    profile: "Perfil",
    logout: "Sair",
    language: "Idioma",
    darkMode: "Modo Escuro",
    lightMode: "Modo Claro",
    welcomeBack: "Bem-vindo de volta",
    viewProfile: "Ver perfil",
    shortcuts: "Atalhos",
    newOrder: "Novo Pedido",
    newImport: "Nova Importação",
    trackPackage: "Rastrear Pacote",
    viewReports: "Ver Relatórios",
    businessPortal: "Portal Empresarial",
    backToWebsite: "Voltar ao Site",
    unreadMessages: "mensagens não lidas",
    pendingTasks: "tarefas pendentes"
  },
  es: {
    dashboard: "Panel",
    overview: "Visión General",
    shipments: "Envíos",
    activeShipments: "Envíos Activos",
    pendingShipments: "Envíos Pendientes",
    completedShipments: "Envíos Completados",
    orders: "Pedidos",
    createOrder: "Crear Pedido",
    orderHistory: "Historial de Pedidos",
    drafts: "Borradores",
    imports: "Importaciones",
    importProcess: "Proceso de Importación",
    customsClearance: "Despacho Aduanero",
    consolidation: "Consolidación",
    tracking: "Seguimiento",
    trackShipment: "Rastrear Envío",
    analytics: "Análisis",
    reports: "Informes",
    performance: "Rendimiento",
    billing: "Facturación",
    invoices: "Facturas",
    payments: "Pagos",
    subscriptions: "Suscripciones",
    team: "Equipo",
    members: "Miembros",
    roles: "Roles",
    invitations: "Invitaciones",
    documents: "Documentos",
    importDocs: "Documentos de Importación",
    customsForms: "Formularios Aduaneros",
    invoicesDocs: "Facturas",
    settings: "Configuración",
    account: "Cuenta",
    preferences: "Preferencias",
    notifications: "Notificaciones",
    security: "Seguridad",
    integrations: "Integraciones",
    help: "Ayuda y Soporte",
    knowledgeBase: "Base de Conocimiento",
    contactSupport: "Contactar Soporte",
    faqs: "Preguntas Frecuentes",
    search: "Buscar...",
    profile: "Perfil",
    logout: "Cerrar Sesión",
    language: "Idioma",
    darkMode: "Modo Oscuro",
    lightMode: "Modo Claro",
    welcomeBack: "Bienvenido de nuevo",
    viewProfile: "Ver perfil",
    shortcuts: "Accesos Directos",
    newOrder: "Nuevo Pedido",
    newImport: "Nueva Importación",
    trackPackage: "Rastrear Paquete",
    viewReports: "Ver Informes",
    businessPortal: "Portal Empresarial",
    backToWebsite: "Volver al Sitio",
    unreadMessages: "mensajes no leídos",
    pendingTasks: "tareas pendientes"
  }
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const params = useParams()
  const lang = (params?.lang as string) || "pt" // Use 'pt' as fallback
  const t = translations.en
  
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [isMounted, setIsMounted] = useState(false)

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", newTheme)
  }

  // Initialize theme from localStorage
  useEffect(() => {
    setIsMounted(true)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    if (savedTheme) {
      setTheme(savedTheme)
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark")
      }
    } else if (prefersDark) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }, [])

  if (!isMounted) {
    return null // Avoid rendering with incorrect theme
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SidebarProvider>
        {/* Desktop Sidebar */}
        <Sidebar variant="floating" collapsible="icon" className="border-none shadow-lg">
          <SidebarHeader className="flex flex-col items-center justify-center py-6">
            <Link href={`/${lang}/business`} className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center text-white">
                <Building2 className="h-6 w-6" />
              </div>
              <span className="ml-2 text-xl font-bold">ShipGlobal</span>
              <Badge className="ml-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Business</Badge>
            </Link>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={true} tooltip={t.overview}>
                  <Link href={`/${lang}/business/dashboard`}>
                    <BarChart3 className="h-5 w-5" />
                    <span>{t.dashboard}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={t.shipments}>
                  <Link href={`/${lang}/business/dashboard/shipments`}>
                    <Truck className="h-5 w-5" />
                    <span>{t.shipments}</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuBadge>12</SidebarMenuBadge>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={t.orders}>
                  <Link href={`/${lang}/business/dashboard/orders`}>
                    <ShoppingCart className="h-5 w-5" />
                    <span>{t.orders}</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/${lang}/business/dashboard/orders/create`}>
                        {t.createOrder}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/${lang}/business/dashboard/orders/history`}>
                        {t.orderHistory}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/${lang}/business/dashboard/orders/drafts`}>
                        {t.drafts}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={t.imports}>
                  <Link href={`/${lang}/business/dashboard/imports`}>
                    <Layers className="h-5 w-5" />
                    <span>{t.imports}</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/${lang}/business/dashboard/imports/process`}>
                        {t.importProcess}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/${lang}/business/dashboard/imports/customs`}>
                        {t.customsClearance}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/${lang}/business/dashboard/imports/consolidation`}>
                        {t.consolidation}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={t.tracking}>
                  <Link href={`/${lang}/business/dashboard/tracking`}>
                    <Search className="h-5 w-5" />
                    <span>{t.tracking}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={t.analytics}>
                  <Link href={`/${lang}/business/dashboard/analytics`}>
                    <BarChart3 className="h-5 w-5" />
                    <span>{t.analytics}</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/${lang}/business/dashboard/analytics/reports`}>
                        {t.reports}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/${lang}/business/dashboard/analytics/performance`}>
                        {t.performance}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={t.billing}>
                  <Link href={`/${lang}/business/dashboard/billing`}>
                    <CreditCard className="h-5 w-5" />
                    <span>{t.billing}</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/${lang}/business/dashboard/billing/invoices`}>
                        {t.invoices}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/${lang}/business/dashboard/billing/payments`}>
                        {t.payments}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/${lang}/business/dashboard/billing/subscriptions`}>
                        {t.subscriptions}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={t.team}>
                  <Link href={`/${lang}/business/dashboard/team`}>
                    <Users className="h-5 w-5" />
                    <span>{t.team}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={t.documents}>
                  <Link href={`/${lang}/business/dashboard/documents`}>
                    <FileText className="h-5 w-5" />
                    <span>{t.documents}</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/${lang}/business/dashboard/documents/import`}>
                        {t.importDocs}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/${lang}/business/dashboard/documents/customs`}>
                        {t.customsForms}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/${lang}/business/dashboard/documents/invoices`}>
                        {t.invoicesDocs}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
            
            <Separator className="my-4" />
            
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={t.settings}>
                  <Link href={`/${lang}/business/dashboard/settings`}>
                    <Settings className="h-5 w-5" />
                    <span>{t.settings}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={t.help}>
                  <Link href={`/${lang}/business/dashboard/help`}>
                    <HelpCircle className="h-5 w-5" />
                    <span>{t.help}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter className="py-4">
            <div className="px-3 py-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>TC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">TechImports Inc.</p>
                    <p className="text-xs text-muted-foreground">Premium Plan</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>{t.profile}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>{t.account}</span>
                        <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>{t.settings}</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={toggleTheme}>
                      {theme === "light" ? (
                        <>
                          <Moon className="mr-2 h-4 w-4" />
                          <span>{t.darkMode}</span>
                        </>
                      ) : (
                        <>
                          <Sun className="mr-2 h-4 w-4" />
                          <span>{t.lightMode}</span>
                        </>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Globe className="mr-2 h-4 w-4" />
                      <span>{t.language}</span>
                      <DropdownMenuShortcut>
                        {lang.toUpperCase()}
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>{t.logout}</span>
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </SidebarFooter>
          
          <SidebarRail />
        </Sidebar>

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            
            <div className="flex-1 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder={t.search}
                    className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={`/${lang}/business/dashboard/orders/create`}>
                        <Button variant="outline" size="sm" className="hidden md:flex">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          {t.newOrder}
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>{t.createOrder}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="relative">
                        <Bell className="h-5 w-5" />
                        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                          5
                        </span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      5 {t.unreadMessages}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="relative">
                        <AlertCircle className="h-5 w-5" />
                        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-medium text-white">
                          3
                        </span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      3 {t.pendingTasks}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <Separator orientation="vertical" className="h-8" />
                
                <Link href={`/${lang}`} className="hidden md:block">
                  <Button variant="ghost" size="sm">
                    <Home className="mr-2 h-4 w-4" />
                    {t.backToWebsite}
                  </Button>
                </Link>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}

// These components are used in the layout but not imported
function User(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function Moon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function Sun(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}
