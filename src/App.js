import React, { useState, useCallback, useEffect, useMemo } from 'react'
import Container from 'react-bootstrap/Container'
import TitleBar from './components/TitleBar'
import Search from './components/Search'
import Lists from './components/Lists'


import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss'

const title = {
	mainTitle: 'React를 배워보자',
	subTitle: 'react-create-app / styled-components / react-bootstrap'
}
const design = {
	bgColor: '#232323',
	color: '#f9f9f9'
}

const App = () => {
	const [evt, setEvt] = useState([])
	const [searchEvt, setSearchEvt] = useState([])
	const [err, setErr] = useState(null)

	useEffect(async () => {
		try {

		}
		catch(err) {
			setErr(err)
		}
		finally {
			return () => {}
		}
	}, [])

	const handleChange = v => {
		// Search
	}
	return (
		<Container>
			<TitleBar title={ title } design={ design } />
			<Search handleChange={ handleChange } />
			<Lists />
		</Container>
	)
}

export default App;
