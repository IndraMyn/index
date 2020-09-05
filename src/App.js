import React, { Fragment, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import './Style/ButtonStyle.css'
import './Style/MainStyle.css'
import './Style/CardStyle.css'
import LoadingComponent from './Components/LoadingComponent'
import { Container } from 'reactstrap'
import FooterPartial from './Partials/FooterPartial'
import NavbarPartial from './Partials/NavbarPartial'
import HomeSection from './Sections/HomeSection'
import ProductSection from './Sections/ProductSection'
import { CheckoutProvider } from './Context/CheckoutContext'
import { ModalCheckoutProvider } from './Context/ModalCheckout'
import { AlertProvider } from './Context/AlertContext'
import { UserInfoProvider } from './Context/UserInfoContext'

// const HomeSection     = lazy(() => import('./Sections/HomeSection'))
const ProfilSection   = lazy(() => import('./Sections/ProfilSection'))
const OrderSection    = lazy(() => import('./Sections/OrderSection'))
const LoginSection    = lazy(() => import('./Sections/LoginSection')) 
const RegisterSection = lazy(() => import('./Sections/RegisterSection'))
const CartSection     = lazy(() => import('./Sections/CartSection'))
// const NotFoundSection = lazy(() => import('./Sections/NotFoundSection'))

function App() {
  return (
    <Fragment>
        <CheckoutProvider>
          <ModalCheckoutProvider>
            <AlertProvider>
              <UserInfoProvider>
                <Suspense fallback={<LoadingComponent />}>
                  <Router>
                        <Container>
                            <NavbarPartial />
                            <div className="mt-large">
                                <Switch>
                                    <Route path="/" exact component={HomeSection} />
                                    <Route path="/index" exact component={HomeSection} />
                                    <Route path="/profil" exact component={ProfilSection} />
                                    <Route path="/product/:id" exact component={ProductSection} />
                                    <Route path="/login" exact component={LoginSection} />    
                                    <Route path="/register" exact component={RegisterSection} />
                                    <Route path="/cart" exact component={CartSection} />
                                    <Route path="/order" exact component={OrderSection} />
                                    <Route exact component={HomeSection} />
                                </Switch>
                            </div>
                        </Container>
                        <FooterPartial />
                  </Router>
                </Suspense>
              </UserInfoProvider>
            </AlertProvider>
          </ModalCheckoutProvider>
        </CheckoutProvider>
    </Fragment>
  );
}

export default App;
