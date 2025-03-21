"use client"

import React, { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { BarChart3, Package, Truck, Users, CreditCard, FileText, ChevronDown, ChevronRight, ArrowUpRight, ArrowRight, Calendar, Clock, DollarSign, ShoppingCart, Layers, AlertCircle, CheckCircle2, XCircle, Filter, Download, Plus, Search, PieChart } from 'lucide-react'
import { AreaChart } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Area, Pie, Cell, Legend } from "recharts"

// Import chart components


// Translation content
type Translations = {
  [key: string]: {
    dashboard: string;
    overview: string;
    welcomeBack: string;
    company: string;
    todayDate: string;
    quickActions: string;
    createOrder: string;
    trackShipment: string;
    viewDocuments: string;
    contactSupport: string;
    activeShipments: string;
    pendingShipments: string;
    completedShipments: string;
    totalSpent: string;
    recentShipments: string;
    viewAll: string;
    status: {
      inTransit: string;
      delivered: string;
      processing: string;
      customs: string;
      problem: string;
      delayed: string;
    };
    shipmentDetails: {
      origin: string;
      destination: string;
      status: string;
      tracking: string;
      eta: string;
      carrier: string;
      type: string;
    };
    upcomingDeliveries: string;
    importVolume: string;
    month: string;
    week: string;
    day: string;
    costBreakdown: string;
    shipping: string;
    customs: string;
    taxes: string;
    handling: string;
    insurance: string;
    downloadReport: string;
    filter: string;
    search: string;
    recentActivity: string;
    viewActivity: string;
    activityTypes: {
      orderCreated: string;
      shipmentReceived: string;
      customsClearance: string;
      paymentProcessed: string;
      documentUploaded: string;
    };
    pendingTasks: string;
    viewTasks: string;
    taskTypes: {
      documentRequired: string;
      paymentDue: string;
      reviewRequired: string;
      actionRequired: string;
    };
    taskPriorities: {
      high: string;
      medium: string;
      low: string;
    };
    importSummary: string;
    byCountry: string;
    byCategory: string;
    byStatus: string;
    countries: {
      usa: string;
      china: string;
      germany: string;
      japan: string;
      uk: string;
      other: string;
    };
    categories: {
      electronics: string;
      apparel: string;
      automotive: string;
      furniture: string;
      other: string;
    };
    teamMembers: string;
    viewTeam: string;
    addMember: string;
    roles: {
      admin: string;
      manager: string;
      operator: string;
      viewer: string;
    };
    months: {
      jan: string;
      feb: string;
      mar: string;
      apr: string;
      may: string;
      jun: string;
      jul: string;
      aug: string;
      sep: string;
      oct: string;
      nov: string;
      dec: string;
    };
  };
};

const translations: Translations = {
  en: {
    dashboard: "Dashboard",
    overview: "Overview",
    welcomeBack: "Welcome back",
    company: "TechImports Inc.",
    todayDate: "Today is",
    quickActions: "Quick Actions",
    createOrder: "Create Order",
    trackShipment: "Track Shipment",
    viewDocuments: "View Documents",
    contactSupport: "Contact Support",
    activeShipments: "Active Shipments",
    pendingShipments: "Pending Shipments",
    completedShipments: "Completed Shipments",
    totalSpent: "Total Spent",
    recentShipments: "Recent Shipments",
    viewAll: "View All",
    status: {
      inTransit: "In Transit",
      delivered: "Delivered",
      processing: "Processing",
      customs: "In Customs",
      problem: "Problem",
      delayed: "Delayed"
    },
    shipmentDetails: {
      origin: "Origin",
      destination: "Destination",
      status: "Status",
      tracking: "Tracking",
      eta: "ETA",
      carrier: "Carrier",
      type: "Type"
    },
    upcomingDeliveries: "Upcoming Deliveries",
    importVolume: "Import Volume",
    month: "Month",
    week: "Week",
    day: "Day",
    costBreakdown: "Cost Breakdown",
    shipping: "Shipping",
    customs: "Customs",
    taxes: "Taxes",
    handling: "Handling",
    insurance: "Insurance",
    downloadReport: "Download Report",
    filter: "Filter",
    search: "Search...",
    recentActivity: "Recent Activity",
    viewActivity: "View All Activity",
    activityTypes: {
      orderCreated: "Order Created",
      shipmentReceived: "Shipment Received",
      customsClearance: "Customs Clearance",
      paymentProcessed: "Payment Processed",
      documentUploaded: "Document Uploaded"
    },
    pendingTasks: "Pending Tasks",
    viewTasks: "View All Tasks",
    taskTypes: {
      documentRequired: "Document Required",
      paymentDue: "Payment Due",
      reviewRequired: "Review Required",
      actionRequired: "Action Required"
    },
    taskPriorities: {
      high: "High",
      medium: "Medium",
      low: "Low"
    },
    importSummary: "Import Summary",
    byCountry: "By Country",
    byCategory: "By Category",
    byStatus: "By Status",
    countries: {
      usa: "United States",
      china: "China",
      germany: "Germany",
      japan: "Japan",
      uk: "United Kingdom",
      other: "Other"
    },
    categories: {
      electronics: "Electronics",
      apparel: "Apparel",
      automotive: "Automotive",
      furniture: "Furniture",
      other: "Other"
    },
    teamMembers: "Team Members",
    viewTeam: "View Team",
    addMember: "Add Member",
    roles: {
      admin: "Admin",
      manager: "Manager",
      operator: "Operator",
      viewer: "Viewer"
    },
    months: {
      jan: "Jan",
      feb: "Feb",
      mar: "Mar",
      apr: "Apr",
      may: "May",
      jun: "Jun",
      jul: "Jul",
      aug: "Aug",
      sep: "Sep",
      oct: "Oct",
      nov: "Nov",
      dec: "Dec"
    }
  },
  pt: {
    dashboard: "Painel",
    overview: "Visão Geral",
    welcomeBack: "Bem-vindo de volta",
    company: "TechImports Inc.",
    todayDate: "Hoje é",
    quickActions: "Ações Rápidas",
    createOrder: "Criar Pedido",
    trackShipment: "Rastrear Remessa",
    viewDocuments: "Ver Documentos",
    contactSupport: "Contatar Suporte",
    activeShipments: "Remessas Ativas",
    pendingShipments: "Remessas Pendentes",
    completedShipments: "Remessas Concluídas",
    totalSpent: "Total Gasto",
    recentShipments: "Remessas Recentes",
    viewAll: "Ver Todos",
    status: {
      inTransit: "Em Trânsito",
      delivered: "Entregue",
      processing: "Processando",
      customs: "Na Alfândega",
      problem: "Problema",
      delayed: "Atrasado"
    },
    shipmentDetails: {
      origin: "Origem",
      destination: "Destino",
      status: "Status",
      tracking: "Rastreamento",
      eta: "Previsão",
      carrier: "Transportadora",
      type: "Tipo"
    },
    upcomingDeliveries: "Entregas Próximas",
    importVolume: "Volume de Importação",
    month: "Mês",
    week: "Semana",
    day: "Dia",
    costBreakdown: "Detalhamento de Custos",
    shipping: "Frete",
    customs: "Alfândega",
    taxes: "Impostos",
    handling: "Manuseio",
    insurance: "Seguro",
    downloadReport: "Baixar Relatório",
    filter: "Filtrar",
    search: "Buscar...",
    recentActivity: "Atividade Recente",
    viewActivity: "Ver Todas Atividades",
    activityTypes: {
      orderCreated: "Pedido Criado",
      shipmentReceived: "Remessa Recebida",
      customsClearance: "Desembaraço Aduaneiro",
      paymentProcessed: "Pagamento Processado",
      documentUploaded: "Documento Enviado"
    },
    pendingTasks: "Tarefas Pendentes",
    viewTasks: "Ver Todas Tarefas",
    taskTypes: {
      documentRequired: "Documento Necessário",
      paymentDue: "Pagamento Pendente",
      reviewRequired: "Revisão Necessária",
      actionRequired: "Ação Necessária"
    },
    taskPriorities: {
      high: "Alta",
      medium: "Média",
      low: "Baixa"
    },
    importSummary: "Resumo de Importação",
    byCountry: "Por País",
    byCategory: "Por Categoria",
    byStatus: "Por Status",
    countries: {
      usa: "Estados Unidos",
      china: "China",
      germany: "Alemanha",
      japan: "Japão",
      uk: "Reino Unido",
      other: "Outros"
    },
    categories: {
      electronics: "Eletrônicos",
      apparel: "Vestuário",
      automotive: "Automotivo",
      furniture: "Móveis",
      other: "Outros"
    },
    teamMembers: "Membros da Equipe",
    viewTeam: "Ver Equipe",
    addMember: "Adicionar Membro",
    roles: {
      admin: "Admin",
      manager: "Gerente",
      operator: "Operador",
      viewer: "Visualizador"
    },
    months: {
      jan: "Jan",
      feb: "Fev",
      mar: "Mar",
      apr: "Abr",
      may: "Mai",
      jun: "Jun",
      jul: "Jul",
      aug: "Ago",
      sep: "Set",
      oct: "Out",
      nov: "Nov",
      dec: "Dez"
    }
  },
  es: {
    dashboard: "Panel",
    overview: "Visión General",
    welcomeBack: "Bienvenido de nuevo",
    company: "TechImports Inc.",
    todayDate: "Hoy es",
    quickActions: "Acciones Rápidas",
    createOrder: "Crear Pedido",
    trackShipment: "Rastrear Envío",
    viewDocuments: "Ver Documentos",
    contactSupport: "Contactar Soporte",
    activeShipments: "Envíos Activos",
    pendingShipments: "Envíos Pendientes",
    completedShipments: "Envíos Completados",
    totalSpent: "Total Gastado",
    recentShipments: "Envíos Recientes",
    viewAll: "Ver Todos",
    status: {
      inTransit: "En Tránsito",
      delivered: "Entregado",
      processing: "Procesando",
      customs: "En Aduana",
      problem: "Problema",
      delayed: "Retrasado"
    },
    shipmentDetails: {
      origin: "Origen",
      destination: "Destino",
      status: "Estado",
      tracking: "Seguimiento",
      eta: "Estimación",
      carrier: "Transportista",
      type: "Tipo"
    },
    upcomingDeliveries: "Próximas Entregas",
    importVolume: "Volumen de Importación",
    month: "Mes",
    week: "Semana",
    day: "Día",
    costBreakdown: "Desglose de Costos",
    shipping: "Envío",
    customs: "Aduana",
    taxes: "Impuestos",
    handling: "Manipulación",
    insurance: "Seguro",
    downloadReport: "Descargar Informe",
    filter: "Filtrar",
    search: "Buscar...",
    recentActivity: "Actividad Reciente",
    viewActivity: "Ver Toda la Actividad",
    activityTypes: {
      orderCreated: "Pedido Creado",
      shipmentReceived: "Envío Recibido",
      customsClearance: "Despacho Aduanero",
      paymentProcessed: "Pago Procesado",
      documentUploaded: "Documento Subido"
    },
    pendingTasks: "Tareas Pendientes",
    viewTasks: "Ver Todas las Tareas",
    taskTypes: {
      documentRequired: "Documento Requerido",
      paymentDue: "Pago Pendiente",
      reviewRequired: "Revisión Requerida",
      actionRequired: "Acción Requerida"
    },
    taskPriorities: {
      high: "Alta",
      medium: "Media",
      low: "Baja"
    },
    importSummary: "Resumen de Importación",
    byCountry: "Por País",
    byCategory: "Por Categoría",
    byStatus: "Por Estado",
    countries: {
      usa: "Estados Unidos",
      china: "China",
      germany: "Alemania",
      japan: "Japón",
      uk: "Reino Unido",
      other: "Otros"
    },
    categories: {
      electronics: "Electrónicos",
      apparel: "Ropa",
      automotive: "Automotriz",
      furniture: "Muebles",
      other: "Otros"
    },
    teamMembers: "Miembros del Equipo",
    viewTeam: "Ver Equipo",
    addMember: "Añadir Miembro",
    roles: {
      admin: "Admin",
      manager: "Gerente",
      operator: "Operador",
      viewer: "Visualizador"
    },
    months: {
      jan: "Ene",
      feb: "Feb",
      mar: "Mar",
      apr: "Abr",
      may: "May",
      jun: "Jun",
      jul: "Jul",
      aug: "Ago",
      sep: "Sep",
      oct: "Oct",
      nov: "Nov",
      dec: "Dic"
    }
  }
}

// Sample data for charts
const volumeData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 }
]

const costBreakdownData = [
  { name: "Shipping", value: 40 },
  { name: "Customs", value: 25 },
  { name: "Taxes", value: 20 },
  { name: "Handling", value: 10 },
  { name: "Insurance", value: 5 }
]

const countryData = [
  { name: "USA", value: 35 },
  { name: "China", value: 30 },
  { name: "Germany", value: 15 },
  { name: "Japan", value: 10 },
  { name: "UK", value: 5 },
  { name: "Other", value: 5 }
]

const categoryData = [
  { name: "Electronics", value: 45 },
  { name: "Apparel", value: 20 },
  { name: "Automotive", value: 15 },
  { name: "Furniture", value: 10 },
  { name: "Other", value: 10 }
]

const statusData = [
  { name: "In Transit", value: 40 },
  { name: "Processing", value: 25 },
  { name: "Customs", value: 15 },
  { name: "Delivered", value: 10 },
  { name: "Problem", value: 5 },
  { name: "Delayed", value: 5 }
]

// Sample data for tables
const recentShipments = [
  {
    id: "SG-12345",
    origin: "New York, USA",
    destination: "São Paulo, BR",
    status: "inTransit",
    eta: "Jun 28, 2023",
    carrier: "FedEx",
    type: "Air"
  },
  {
    id: "SG-12346",
    origin: "London, UK",
    destination: "Rio de Janeiro, BR",
    status: "customs",
    eta: "Jul 02, 2023",
    carrier: "DHL",
    type: "Air"
  },
  {
    id: "SG-12347",
    origin: "Tokyo, JP",
    destination: "São Paulo, BR",
    status: "processing",
    eta: "Jul 10, 2023",
    carrier: "UPS",
    type: "Air"
  },
  {
    id: "SG-12348",
    origin: "Berlin, DE",
    destination: "Brasília, BR",
    status: "delivered",
    eta: "Jun 15, 2023",
    carrier: "DHL",
    type: "Sea"
  },
  {
    id: "SG-12349",
    origin: "Shanghai, CN",
    destination: "São Paulo, BR",
    status: "problem",
    eta: "Jul 05, 2023",
    carrier: "FedEx",
    type: "Air"
  }
]

const params = useParams()
const lang = (params?.lang as string) || "pt"
const t = translations[lang as keyof typeof translations] || translations.en
const recentActivity = [
  {
    id: 1,
    type: "orderCreated",
    description: "Order #12350 created",
    date: "Today, 10:30 AM",
    user: "John Smith"
  },
  {
    id: 2,
    type: "shipmentReceived",
    description: "Shipment SG-12345 received at warehouse",
    date: "Today, 9:15 AM",
    user: "System"
  },
  {
    id: 3,
    type: "customsClearance",
    description: "Customs clearance completed for SG-12346",
    date: "Yesterday, 4:45 PM",
    user: "System"
  },
  {
    id: 4,
    type: "paymentProcessed",
    description: "Payment of $1,250.00 processed",
    date: "Yesterday, 2:30 PM",
    user: "Maria Rodriguez"
  },
  {
    id: 5,
    type: "documentUploaded",
    description: "Commercial invoice uploaded for SG-12347",
    date: "Jun 20, 2023",
    user: "John Smith"
  }
]

const pendingTasks = [
  {
    id: 1,
    type: "documentRequired",
    description: "Upload commercial invoice for SG-12349",
    dueDate: "Today",
    priority: "high"
  },
  {
    id: 2,
    type: "paymentDue",
    description: "Payment of $850.00 due for customs fees",
    dueDate: "Tomorrow",
    priority: "high"
  },
  {
    id: 3,
    type: "reviewRequired",
    description: "Review shipment details for SG-12350",
    dueDate: "Jun 25, 2023",
    priority: "medium"
  },
  {
    id: 4,
    type: "actionRequired",
    description: "Confirm delivery address for SG-12351",
    dueDate: "Jun 26, 2023",
    priority: "low"
  }
]

const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    role: "admin",
    email: "john@techimports.com",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    role: "manager",
    email: "maria@techimports.com",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 3,
    name: "David Chen",
    role: "operator",
    email: "david@techimports.com",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "viewer",
    email: "sarah@techimports.com",
    avatar: "/placeholder-user.jpg"
  }
]

// Color schemes for charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d']
type ShipmentStatus = 'inTransit' | 'delivered' | 'processing' | 'customs' | 'problem' | 'delayed';

const STATUS_COLORS: Record<ShipmentStatus, string> = {
  inTransit: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-800',
  delivered: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-800',
  processing: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:border-purple-800',
  customs: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900 dark:text-amber-300 dark:border-amber-800',
  problem: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900 dark:text-red-300 dark:border-red-800',
  delayed: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900 dark:text-orange-300 dark:border-orange-800'
}

export default function Dashboard() {
  const params = useParams()
  const lang = (params?.lang as string) || "pt" // Use 'pt' as fallback
  const t = translations[lang] || translations.en
  
  const [volumeTimeframe, setVolumeTimeframe] = useState("month")
  
  // Format today's date
  const today = new Date()
  const formattedDate = today.toLocaleDateString(
    lang === 'en' ? 'en-US' : lang === 'pt' ? 'pt-BR' : 'es-ES', 
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  )

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{t.dashboard}</h1>
          <p className="text-muted-foreground">
            {t.welcomeBack}, {t.company}. {t.todayDate} {formattedDate}.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                {t.filter}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>{t.filter}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {t.shipmentDetails.status}: {t.status.inTransit}
              </DropdownMenuItem>
              <DropdownMenuItem>
                {t.shipmentDetails.status}: {t.status.processing}
              </DropdownMenuItem>
              <DropdownMenuItem>
                {t.shipmentDetails.status}: {t.status.customs}
              </DropdownMenuItem>
              <DropdownMenuItem>
                {t.shipmentDetails.carrier}: FedEx
              </DropdownMenuItem>
              <DropdownMenuItem>
                {t.shipmentDetails.carrier}: DHL
              </DropdownMenuItem>
              <DropdownMenuItem>
                {t.shipmentDetails.carrier}: UPS
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            {t.downloadReport}
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t.activeShipments}</p>
                <h3 className="text-2xl font-bold mt-1">12</h3>
              </div>
              <div className="p-2 bg-blue-100 rounded-full dark:bg-blue-900">
                <Package className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="mt-4">
              <Progress value={75} className="h-1.5" />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>8 {t.status.inTransit}</span>
              <span>4 {t.status.processing}</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t.pendingShipments}</p>
                <h3 className="text-2xl font-bold mt-1">5</h3>
              </div>
              <div className="p-2 bg-amber-100 rounded-full dark:bg-amber-900">
                <Truck className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
            <div className="mt-4">
              <Progress value={40} className="h-1.5 bg-amber-100 dark:bg-amber-900" />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>3 {t.status.customs}</span>
              <span>2 {t.status.delayed}</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t.completedShipments}</p>
                <h3 className="text-2xl font-bold mt-1">87</h3>
              </div>
              <div className="p-2 bg-green-100 rounded-full dark:bg-green-900">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="mt-4">
              <Progress value={100} className="h-1.5 bg-green-100 dark:bg-green-900" />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>87 {t.status.delivered}</span>
              <span>+12% {lang === 'en' ? 'from last month' : lang === 'pt' ? 'do mês passado' : 'del mes pasado'}</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t.totalSpent}</p>
                <h3 className="text-2xl font-bold mt-1">$24,389</h3>
              </div>
              <div className="p-2 bg-purple-100 rounded-full dark:bg-purple-900">
                <CreditCard className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="mt-4">
              <Progress value={65} className="h-1.5 bg-purple-100 dark:bg-purple-900" />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>YTD: $24,389</span>
              <span>+8% {lang === 'en' ? 'from last year' : lang === 'pt' ? 'do ano passado' : 'del año pasado'}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Shipments */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>{t.recentShipments}</CardTitle>
              <CardDescription>
                {lang === 'en' 
                  ? 'Your recent shipment activity' 
                  : lang === 'pt' 
                  ? 'Sua atividade recente de remessas' 
                  : 'Su actividad reciente de envíos'}
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={t.search}
                  className="w-[200px] pl-8"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                {t.filter}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t.shipmentDetails.tracking}</TableHead>
                  <TableHead>{t.shipmentDetails.origin}</TableHead>
                  <TableHead>{t.shipmentDetails.destination}</TableHead>
                  <TableHead>{t.shipmentDetails.status}</TableHead>
                  <TableHead>{t.shipmentDetails.eta}</TableHead>
                  <TableHead>{t.shipmentDetails.carrier}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentShipments.map((shipment) => (
                  <TableRow key={shipment.id}>
                    <TableCell className="font-medium">{shipment.id}</TableCell>
                    <TableCell>{shipment.origin}</TableCell>
                    <TableCell>{shipment.destination}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={STATUS_COLORS[shipment.status as ShipmentStatus]}>
                        {t.status[shipment.status as ShipmentStatus]}
                      </Badge>
                    </TableCell>
                    <TableCell>{shipment.eta}</TableCell>
                    <TableCell>{shipment.carrier}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" size="sm">
              {t.viewAll}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Select defaultValue="10">
                <SelectTrigger className="h-8 w-[70px]">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardFooter>
        </Card>

        {/* Quick Actions & Upcoming Deliveries */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>{t.quickActions}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start">
                <ShoppingCart className="mr-2 h-4 w-4" />
                {t.createOrder}
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Search className="mr-2 h-4 w-4" />
                {t.trackShipment}
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                {t.viewDocuments}
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                {t.contactSupport}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.upcomingDeliveries}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentShipments.slice(0, 3).map((shipment, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                      <Package className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">{shipment.id}</p>
                      <p className="text-sm text-muted-foreground">{shipment.destination}</p>
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>{shipment.eta}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className={STATUS_COLORS[shipment.status as ShipmentStatus]}>
                      {t.status[shipment.status as ShipmentStatus]}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Import Volume & Cost Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>{t.importVolume}</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="month" onValueChange={setVolumeTimeframe}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="month">{t.month}</TabsTrigger>
                <TabsTrigger value="week">{t.week}</TabsTrigger>
                <TabsTrigger value="day">{t.day}</TabsTrigger>
              </TabsList>
              <TabsContent value="month" className="space-y-4 pt-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={volumeData}>
                      <defs>
                        <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0088FE" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#0088FE" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#0088FE" 
                        fillOpacity={1} 
                        fill="url(#colorVolume)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              <TabsContent value="week" className="pt-4">
                <div className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">
                    {lang === 'en' 
                      ? 'Weekly data visualization' 
                      : lang === 'pt' 
                      ? 'Visualização de dados semanais' 
                      : 'Visualización de datos semanales'}
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="day" className="pt-4">
                <div className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">
                    {lang === 'en' 
                      ? 'Daily data visualization' 
                      : lang === 'pt' 
                      ? 'Visualização de dados diários' 
                      : 'Visualización de datos diarios'}
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.costBreakdown}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={costBreakdownData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {costBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity, Tasks, and Import Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{t.recentActivity}</CardTitle>
            <Button variant="ghost" size="sm">
              {t.viewActivity}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                    {activity.type === 'orderCreated' && <ShoppingCart className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
                    {activity.type === 'shipmentReceived' && <Package className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
                    {activity.type === 'customsClearance' && <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
                    {activity.type === 'paymentProcessed' && <CreditCard className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
                    {activity.type === 'documentUploaded' && <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">{activity.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{activity.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.user}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Tasks */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{t.pendingTasks}</CardTitle>
            <Button variant="ghost" size="sm">
              {t.viewTasks}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {pendingTasks.map((task) => (
                <div key={task.id} className="flex items-start space-x-4">
                  <div className={`p-2 rounded-full ${
                    task.priority === 'high' 
                      ? 'bg-red-100 dark:bg-red-900' 
                      : task.priority === 'medium'
                      ? 'bg-amber-100 dark:bg-amber-900'
                      : 'bg-blue-100 dark:bg-blue-900'
                  }`}>
                    {task.type === 'documentRequired' && <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
                    {task.type === 'paymentDue' && <CreditCard className="h-4 w-4 text-red-600 dark:text-red-400" />}
                    {task.type === 'reviewRequired' && <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />}
                    {task.type === 'actionRequired' && <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />}
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">{task.description}</p>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{task.dueDate}</span>
                      <Badge className="ml-2" variant="outline">
                        {t.taskPriorities[task.priority as keyof typeof t.taskPriorities]}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Import Summary */}
        <Card>
          <CardHeader>
            <CardTitle>{t.importSummary}</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="country">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="country">{t.byCountry}</TabsTrigger>
                <TabsTrigger value="category">{t.byCategory}</TabsTrigger>
                <TabsTrigger value="status">{t.byStatus}</TabsTrigger>
              </TabsList>
              <TabsContent value="country" className="space-y-4 pt-4">
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={countryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {countryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {countryData.map((entry, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 mr-1 rounded-full" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span>{t.countries[entry.name.toLowerCase() as keyof typeof t.countries] || entry.name}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="category" className="pt-4">
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {categoryData.map((entry, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 mr-1 rounded-full" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span>{t.categories[entry.name.toLowerCase() as keyof typeof t.categories] || entry.name}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="status" className="pt-4">
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={statusData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {statusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {statusData.map((entry, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 mr-1 rounded-full" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span>{entry.name}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Team Members */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{t.teamMembers}</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              {t.addMember}
            </Button>
            <Button variant="ghost" size="sm">
              {t.viewTeam}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center p-4 border rounded-lg">
                <Avatar className="h-16 w-16 mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}{member.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-medium">{member.name}</h3>
                <Badge className="mt-1" variant="outline">
                  {t.roles[member.role as keyof typeof t.roles]}
                </Badge>
                <p className="text-sm text-muted-foreground mt-2">{member.email}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
