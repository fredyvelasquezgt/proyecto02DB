import React, { useState } from 'react'

import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { BrowserRouter, Switch } from 'react-router-dom'
import { MainScreen } from '../pages/auth/mainScreen'
import { Layout } from '../pages/ui/layout'

import { HomeScreen } from '../pages/dashboard/homeScreen'

import { CategoriesScreen } from '../pages/categories/categoriesScreen'
import { RecommendationsScreen } from '../pages/listMovies/recommendationsScreen'
import { MoviesScreen } from '../pages/movies/moviesScreen'
import { GendersScreen } from '../pages/genders/gendersScreen'
import { MovieScreen } from '../pages/movie/movieScreen'
import { AccountScreen } from '../pages/account/accountScreen'
import { LoginScreen } from '../pages/auth/loginScreen'
import { SignInScreen } from '../pages/auth/signInScreen'
import { ProfilesScreen } from '../pages/auth/profilesScreen'

export const RootRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* Public routes */}
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/auth/login" component={LoginScreen} />
          <Route exact path="/auth/signin" component={SignInScreen} />
          <Route exact path="/auth/profiles" component={ProfilesScreen} />

          {/* Private routes */}
          <Layout>
            <Route exact path="/app" component={HomeScreen} />

            <Route
              exact
              path="/app/recomendations"
              component={RecommendationsScreen}
            />
            <Route exact path="/app/movies" component={MoviesScreen} />
            <Route exact path="/app/categories" component={CategoriesScreen} />
            <Route exact path="/app/genders" component={GendersScreen} />
            <Route exact path="/app/account" component={AccountScreen} />

            <Route exact path="/app/movie/:id" component={MovieScreen} />
          </Layout>

          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
