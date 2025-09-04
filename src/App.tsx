import type React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { useAuthStore } from "@/store/authStore"
import { Layout } from "@/components/Layout/Layout"
import { Login } from "@/pages/Login"
import { Dashboard } from "@/pages/Dashboard"
import { Products } from "@/pages/Products"
import { Orders } from "@/pages/Orders"
import { Customers } from "@/pages/Customers"
import { Settings } from "@/pages/Settings"

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuthStore()
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
