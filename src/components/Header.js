import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-microchip"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Application: Sagar Desai</h1>
                <p>Software Engineer, Full-Stack <br />
                Please find my answers to the questions outlined in the <a href="https://angel.co/wefunder/jobs/158985-software-engineer-full-stack">application</a> below.</p>

            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Why Wefunder</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Works</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Survival Skill</a></li>

            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
