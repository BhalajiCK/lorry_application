import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Login from './components/auth/Login';
import AdminLogin from './components/auth/AdminLogin';
import SignUpDriver from './components/auth/SignUpDriver';
import SignUpGoodsOwner from './components/auth/SignUpGoodsOwner';
import { lazy, Suspense } from 'react';
const DriverDashboard = lazy(() => import('./components/driver/DriverDashboard'));
const GoodsOwnerDashboard = lazy(() => import('./components/goods-owner/GODashboard'));
const AdminDashboard = lazy(() => import('./components/admin/Admin_Dashboard'));
import ProtectedRoute from './components/common/ProtectedRoute';
import AboutUs from './components/common/AboutUs';
import Contact from './components/common/Contact';
import PrivacyPolicy from './components/common/PrivacyPolicy';
import TermsOfService from './components/common/TermsOfService';
import RegisterChoice from './Pages/RegisterChoice';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="app">
          {/* <Navbar userType={userType} username={username} /> */}
          <main className="main-content">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/register-choice" element={<RegisterChoice />} />
                <Route path="/signup-driver" element={<SignUpDriver />} />
                <Route path="/signup-goods-owner" element={<SignUpGoodsOwner />} />
                <Route path="/driver/*" element={<ProtectedRoute allowedUserTypes={['driver']} />}> 
                  <Route path="dashboard" element={<DriverDashboard />} />
                  <Route path="" element={<DriverDashboard />} />
                </Route>
                <Route path="/goods-owner/*" element={<ProtectedRoute allowedUserTypes={['goodsOwner']} />}> 
                  <Route path="dashboard" element={<GoodsOwnerDashboard />} />
                  <Route path="" element={<GoodsOwnerDashboard />} />
                </Route>
                <Route path="/admin/*" element={<ProtectedRoute allowedUserTypes={['admin']} />}> 
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="" element={<AdminDashboard />} />
                </Route>
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

// return (
//   <div>
//     {/* Your component logic using userType */}
//   </div>
// );
// }

