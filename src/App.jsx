import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Col from './components/Col'
import CodeBlock from './components/CodeBlock'
import CodeXY from './components/CodeXY'
import Marquee from "react-fast-marquee"
/*
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBroom, faSort, faPenToSquare, faTrashCan, faEye, faEyeSlash, faCheck, faArrowLeft, faImage, faLink, faHeading, faParagraph, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faSort, faBroom, faPenToSquare, faTrashCan, faEye, faEyeSlash, faPenToSquare, faCheck, faArrowLeft, faImage, faLink, faHeading, faParagraph, faPlus)
*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Section xy="grid" classes="intro">
        <Col xy="col-12">
          <div className="marquees">
            <Marquee speed="110" gradient={false}>
              <h2>Design in 12 columns ○</h2>
              <h2 className="dev"> Develop in 12 columns ○</h2>
            </Marquee>
            <Marquee speed="70" gradient={false}>
              <h2 className="dev"> Develop in 12 columns ○</h2>
              <h2>Design in 12 columns ○</h2>
            </Marquee>
          </div>
        </Col>
        <Col xy="2xl:8 xl:8 md:10 xs:12">
          <p>XD, Figma, whatever the tool, it uses a grid—probably a 12 column one. Developers don't. Often you spend years tweaking crap in QA. You need to work to a grid.
            </p>
            <p>Use Xylem. Keep it simple, get it right.</p>
        </Col>
      </Section>
      <Section classes="visual-grid" xy="block">
        <h3>12 column responsive grid.</h3>
        <div data-xy="grid">
            <div data-xy="col 2xl:1 xl:1 lg:1 md:2 sm:3 xs:4"><p>1</p></div>
            <div data-xy="col 2xl:1 xl:1 lg:1 md:2 sm:3 xs:4"><p>2</p></div>
            <div data-xy="col 2xl:1 xl:1 lg:1 md:2 sm:3 xs:4"><p>3</p></div>
            <div data-xy="col 2xl:1 xl:1 lg:1 md:2 sm:3 xs:4"><p>4</p></div>
            <div data-xy="col 2xl:1 xl:1 lg:1 md:2 sm:3 xs:4"><p>5</p></div>
            <div data-xy="col 2xl:1 xl:1 lg:1 md:2 sm:3 xs:4"><p>6</p></div>
            <div data-xy="col 2xl:1 xl:1 lg:1 md:2 sm:3 xs:4"><p>7</p></div>
            <div data-xy="col 2xl:1 xl:1 lg:1 md:2 sm:3 xs:4"><p>8</p></div>
            <div data-xy="col 2xl:1 xl:1 lg:1 md:2 sm:3 xs:4"><p>9</p></div>
            <div data-xy="col 2xl:1 xl:1 lg:1 md:2 sm:3 xs:4"><p>10</p></div>
            <div data-xy="col 2xl:1 xl:1 lg:1 md:2 sm:3 xs:4"><p>11</p></div>
            <div data-xy="col 2xl:1 xl:1 lg:1 md:2 sm:3 xs:4"><p>12</p></div>
        </div>
        <div data-xy="grid">
            <div data-xy="col 2xl:6 xl:6 md:12">
                <p>This is a col 6</p>
            </div>
            <div data-xy="col 2xl:6 xl:6 md:12">
                <p>This is a col 6</p>
            </div>
        </div>
        <div data-xy="grid">
            <div data-xy="col 2xl:4 xl:4 md:8 sm:12">
                <p>This is a col 4</p>
            </div>
            <div data-xy="col 2xl:2 xl:2 md:4 sm:12">
                <p>This is a col 2</p>
            </div>
            <div data-xy="col 2xl:6 xl:6 md:12">
                <p>This is a col 6</p>
            </div>
        </div>
        <div data-xy="grid">
            <div data-xy="col 2xl:4 xl:4">
                <p>This is a col 4</p>
            </div>
            <div data-xy="col 2xl:4 xl:4">
                <p>This is a col 4</p>
            </div>
            <div data-xy="col 2xl:4 xl:4">
                <p>This is a col 4</p>
            </div>
        </div>
      </Section>

      <Section classes="attributes" xy="grid items-center">
        <Col xy="2xl:6 md:12" classes="bubble">
          <h3>The XY Attribute—<br />Tailwind CSS Syntax</h3>
          <p>The syntax is very similar to Tailwind CSS. Add a <code>data-xy</code> attribute and add what you want and BAM grid time!</p>
        </Col>
        <Col xy="2xl:6 md:12">
          <CodeBlock>
            {`<div data-xy="grid has-gutter">
  <div data-xy="col col-4">This is a 4 column</div>
  <div data-xy="col col-8">This spans 8 columns</div>
</div>`}
          </CodeBlock>
        </Col>
      </Section>

      <Section classes="responsiveness" xy="grid items-center">
        <Col xy="2xl:6 md:12" classes="bubble">
          <h3>Responsive mode!</h3>
          <p>There are 6 different breakpoints: 
            <code>2xl:</code>, <code>xl:</code>, <code>lg:</code>, <code>md:</code>, 
            <code>sm:</code> and <code>xs:</code>.</p>
            <p>They cascade down. Append any property with the media key and bingo bango! Omit <em>cols</em> for col based media breaks</p>
        </Col>
        <Col xy="2xl:6 md:12">
          <CodeBlock>
              {`<div data-xy="grid has-gutter sm:flex sm:flex-column">
  <div data-xy="col 2xl:4 md:12 sm:auto">This is a 4 column, but on mobile its full width</div>
  <div data-xy="col 2xl:8 md:12 sm:auto">This spans 8 columns, but on mobile it is also full width</div>
</div>`}
            </CodeBlock>
          
        </Col>

      </Section>

      <div className="blurry-boy">
        <Section classes="glossary" xy="grid items-center">
          <Col xy="col-12">
            <h2>Glossary / Docs</h2>
            <p>She a simple one. Copy the CSS file, use the xy attribute.</p>
          </Col>
        </Section>
        <Section classes="glossary" xy="grid items-center">
          <Col xy="2xl:6 md:12">
            <h3>Display Modes</h3>
            <p>Xylem's main focus is grid, but also supports flex and display</p>
          </Col>
          <Col xy="2xl:6 md:12">
            <CodeBlock>
                {`<div data-xy="2xl:grid xl:grid lg:flex md:block sm:inline-block">
      Append media keys to change display mode too!
  </div>`}
              </CodeBlock>
          </Col>
        </Section>
        <Section classes="glossary alt" xy="grid items-center">
          <Col xy="2xl:6 md:12">
            <h3>The art of the Col</h3>
            <p><CodeXY>col</CodeXY> is the main dude of Xylem. Here are the options.</p>
            <ul>
              <li><CodeXY>col</CodeXY> - activate <code>col</code> by adding col to your <code>data-xy</code> attribute.</li>
              <li><CodeXY>col-X</CodeXY> - use numbers 1 to 12 to span that many columns, use the <code>auto</code> keyword to default it</li>
              <li><CodeXY>md:X</CodeXY> - use a media query key and a number to span that many columns at that break point</li>
              <li><CodeXY>col-start-X / sm:start-X</CodeXY> - for CSS grid, specify the start column</li>
              <li><CodeXY>col-row-X / sm:row-X</CodeXY> - CSS grid, specify the starting row</li>
              <li><CodeXY>col-row-span-X / sm:row-span-X</CodeXY> - CSS grid, specify the ending row</li>
            </ul>
            <p>If shit is wonky, you probably missed the <CodeXY>col</CodeXY>.</p>
          </Col>
          <Col xy="2xl:6 md:12">
            <CodeBlock>
                {`data-xy="grid 2xl:6 xl:6 md:8 sm:12 xs:auto"
  data-xy="grid col-12"
  data-xy="grid xl:6 xl:start-4 xl:row-1 xl:row-span-2"`}
              </CodeBlock>
          </Col>
        </Section>
        <Section classes="glossary" xy="grid items-center">
          <Col xy="2xl:6 md:12">
            <h3>Grid/Flex Alignment Options</h3>
            <p>Xylem uses custom CSS properties to do most of the heavy lifting. 
              Look at the code for a squiz. The codeblock aside demostrates some of the availible options.
              Below is the <code>CSS</code> property and the <CodeXY>xy</CodeXY> equivalent.
              </p>
            <ul>
              <li><code>justify-content</code> just uses <CodeXY>justify</CodeXY></li>
              <li><code>justify-items</code> uses <CodeXY>justify-items</CodeXY></li>
              <li><code>align-items</code> uses <CodeXY>items</CodeXY></li>
              <li><code>align-self</code> uses <CodeXY>self</CodeXY></li> 
              <li><code>justify-self</code> uses <CodeXY>justify-self</CodeXY></li>
            </ul>
            <p>They all work responsively too.</p>
          </Col>
          <Col xy="2xl:6 md:12">
            <CodeBlock>
                {`data-xy="grid justify-center" // justify-content: center;

  data-xy="grid justify-items-stretch" // justify-items: stretch;
  data-xy="grid justify-items-flex-start" // justify-items: flex-start;
  data-xy="grid justify-items-around" // justify-items: space-around;

  data-xy="grid items-center" // align-items: center;

  data-xy="grid self-auto" // align-self: auto;

  data-xy="grid justify-self-start" // justify-self: start;`}
              </CodeBlock>
          </Col>
        </Section>
        <Section classes="glossary alt" xy="grid items-center">
          <Col xy="2xl:6 md:12">
            <h3>Feeling Flexy?</h3>
            <p>Here is what you can do with the specific flex options.
              </p>
            <ul>
              <li><code>flex-wrap: nowrap / wrap</code> just uses <CodeXY>nowarap / wrap</CodeXY></li>
              <li><code>flex-direction: column</code> uses <CodeXY>flex-column</CodeXY></li>
            </ul>
            <p>All the properties for <code>flex-direction</code> as as you would expect. They all work responsively too.</p>
          </Col>
          <Col xy="2xl:6 md:12">
            <CodeBlock>
                {`data-xy="grid justify-center" // justify-content: center;

  data-xy="grid justify-items-stretch" // justify-items: stretch;
  data-xy="grid justify-items-flex-start" // justify-items: flex-start;
  data-xy="grid justify-items-around" // justify-items: space-around;

  data-xy="grid items-center" // align-items: center;

  data-xy="grid self-auto" // align-self: auto;

  data-xy="grid justify-self-start" // justify-self: start;`}
              </CodeBlock>
          </Col>        
        </Section>
      </div>
      <Section classes="bottom" xy="flex flex-column justify-center items-center">
        <a href="/xylem.v2.css" download>Download and give it a go!</a>
      </Section>
      <Footer />
    </div>
  )
}

export default App
