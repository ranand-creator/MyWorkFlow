import React, { useEffect } from 'react'
import styles from './Modal.module.css'

const Modal = ({show, handleCloseSettings}) => {

	const handleEscapeKeyDown = (e) => {
		if (e.charCode === 27 || e.keyCode === 27) 
			handleCloseSettings()
	}

	useEffect(() => {
		document.body.addEventListener('keydown', handleEscapeKeyDown)
		return () => {
			document.body.addEventListener('keydown', handleEscapeKeyDown)
		}
	})

	return show ? (
		<div onClick = {handleCloseSettings} className={styles.modal}>
			<div onClick={click => click.stopPropagation()} className={styles.modalContent}>

				<div className={styles.modalHeader}>
					<h2 className={styles.modalTitle}>Settings</h2>
				</div>

				<div className={styles.modalBody + ' ' + styles.settingsText}>
					Settings options
				</div>

				<div className={styles.modalFooter}>
					<button onClick={handleCloseSettings} className={styles.modalClose + ' ' + styles.btn + ' ' + styles.addTask}>Ok</button>
				</div>

			</div>
		</div>
	) : null
}

export default Modal;

// Documentation on how to use the react-modal can be found at https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a