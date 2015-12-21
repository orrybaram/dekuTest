
import element from 'virtual-element'
import {MyButton} from './button'
import {render,tree} from 'deku'

// We're using our custom MyButton element
var app = tree(
  <div class="MyApp">
  	<MyButton>Click me</MyButton>
  </div>
)

var $dekuContainer = document.getElementsByClassName('deku-app')[0]

render(app, $dekuContainer)