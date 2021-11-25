import React, { useEffect, useState } from 'react'
import ApiService from './ApiService/service'
import GlobalStyles from './Styles/GlobalStyles'

import MovieRow from './Components/MovieRow'
import FeatureMovie from './Components/FeatureMovie'

import { Page, Lists } from './styles'

const App = () => {
  const [list, setList] = useState()
  const [featuredData, setFeaturedData] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      try {
        const response = await ApiService.getHomeList()
        setList(response)
        console.log(response)

        //
        let originals = response.filter(i => i.slug === 'originals')
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
        let chosen = originals[0].items.results[randomChosen]

        let chosenInfo = await ApiService.getMovieInfo(chosen.id, 'tv')
        setFeaturedData(chosenInfo)
      } catch (error) {
        console.log('catch:', error)
      }
    }
    loadAll();
  }, [])
  return (
    <>
      <GlobalStyles />
      <Page>
        {featuredData &&
          <FeatureMovie item={featuredData} />
        }
        <Lists>
          {list && list.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </Lists>
      </Page>
    </>
  )
}

export default App