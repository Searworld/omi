﻿import Omi from 'omix'
import '../../index.js'

class App extends Omi.Component {
    constructor(data) {
        super(data)
    }

    handleTap(evt){
        this.refs.touchArea.innerHTML+='<br/>Tap'
    }

    handleSwipe(evt){
        this.refs.touchArea.innerHTML+='<br/>Swipe-'+ evt.direction
    }

    style(){
        return  `.touchArea{
                    background-color: green;
                    width: 200px;
                    min-height: 200px;
                    text-align: center;
                    color:white;
                    height:auto;
                }`
    }

    render() {
        return  <div>
                    <div omi-finger class="touchArea" ref="touchArea" tap={this.handleTap}  swipe={this.handleSwipe} >
                        Tap or Swipe Me!
                    </div>
                </div>
    }
}

Omi.render(new App(),"#container")