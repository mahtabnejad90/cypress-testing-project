import './device.cy'
import './fixture.cy'
import './keyboard.cy'
import'./login.cy'
import './simple.cy'
import './custom.cy'
import './select.cy'
import './screenshots.cy'
import './scroll.cy'
import './data.cy'
import './class.cy'

after(function(){
    cy.clearCookies()
    cy.clearLocalStorage()
})