import * as React from 'react'
import style from './index.module.scss'
import reactLogo from '@assets/react.svg'
import { ReactComponent as ViteLogo } from '@assets/vite.svg'
import Worker from './example.js?worker'
import SvgIcon from '../SvgIcon/index.jsx'

export function Header() {
	// const worker = new Worker()
	// worker.addEventListener("message", (e) => {
	// 	console.log(e)
	// })

	const icons = import.meta.globEager('../../assets/*.svg')
	const iconUrls = Object.values(icons).map((mod: any) => {
		// 如 ../../assets/icons/logo-1.svg -> logo-1
		const fileName = mod.default.split('/').pop()
		const [svgName] = fileName.split('.')
		return svgName
	})

	console.log('iconUrls', iconUrls)

	return <p className={style.header}>
		{/* <img src={reactLogo} alt="" />
		<ViteLogo /> */}
		{iconUrls.map((item) => (
			<SvgIcon name={item} color='#333' key={item} width="50" height="50" />
		))}
		This is Header
	</p>
}