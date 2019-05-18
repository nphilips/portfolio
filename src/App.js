import React, {Component} from "react"
import { Switch, Route, withRouter } from 'react-router-dom'
import ErrorBoundary from './shared/ErrorBoundary.js'
import Nav from './components/Nav.js'
import About from './components/About.js'
import Home from './components/Home.js'
import Contact from './components/Contact.js'
import Projects from './components/Projects.js'
import {PageFade} from './transitions'

class App extends Component {
  constructor(){
    super()
    this.state = {
      navToggle: false
    }
  }

  toggler = () => this.setState(prevState => ({ navToggle: !prevState.navToggle}))
  
  render(){
    const {navToggle} = this.state
    const {location} = this.props

    return (
      <div className='app-container'>
        <Nav navToggle={navToggle} toggler={this.toggler}/>
        <div onClick={this.toggler} className={`overlay overlay-${navToggle ? "open" : "closed"}`}></div>

        <button className={`rotate rotate-${navToggle ? "open" : "closed"}`} onClick={this.toggler}><div className='navIcon'></div></button>

        <PageFade location={location}>
                    <Switch location={location}>
                        <Route exact path="/" render={ props => 
                                                    <ErrorBoundary>
                                                        <Home {...props}/>
                                                    </ErrorBoundary>
                                                }/>
                        <Route path="/about" render={ props => 
                                                    <ErrorBoundary>
                                                        <About {...props}/>
                                                    </ErrorBoundary>
                                                }/>
                        <Route path="/projects" render={ props => 
                                                    <ErrorBoundary>
                                                        <Projects {...props}/>
                                                    </ErrorBoundary>
                                                }/>
                        <Route path="/contact" render={ props => 
                                                    <ErrorBoundary>
                                                        <Contact {...props}/>
                                                    </ErrorBoundary>
                                                }/>
                    </Switch>
                </PageFade>

      </div>
    )
  }

  // return (
  //   <div>
  //     <Home/>
  //     <About/>
  //     <Projects/>
  //     <Contact/>
  //   </div>
  // )
}

export default withRouter(App)