import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Form Component/Select',
  component: 'ft-select',
  decorators: [
    (story: any) => html` <style>
        .abs {
          position: absolute;
          top: calc(100vh - 128px);
          right: calc(100vw - 100% + 16px);
        }

        [slot='graphic'].material-icons {
          background-color: gray;
          color: white;
        }

        ft-select ~ div,
        div ~ ft-select {
          margin-top: 8px;
        }

        #fullwidthParent {
          border: 1px solid black;
          width: 70%;
        }

        #fullwidthOptions {
          width: 100%;
        }
      </style>
      <div class="my-container">${story()}</div>`,
  ],
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {}

const Template: Story<ArgTypes> = () => html` <main>
  <h2>Filled</h2>
  <ft-select label="filled" id="filled">
    <ft-list-item></ft-list-item>
    <ft-list-item value="1">Option 1</ft-list-item>
    <ft-list-item value="2">Option 2</ft-list-item>
    <ft-list-item value="3">Option 3</ft-list-item>
  </ft-select>
  <div>Value: <span id="filledValue"></span></div>

  <h2>Outlined</h2>
  <ft-select outlined label="outlined" id="outlined">
    <ft-list-item></ft-list-item>
    <ft-list-item value="1">Option 1</ft-list-item>
    <ft-list-item value="2">Option 2</ft-list-item>
    <ft-list-item value="3">Option 3</ft-list-item>
  </ft-select>
  <div>Value: <span id="outlinedValue"></span></div>

  <h2>Preselected</h2>
  <ft-select label="preselected" id="preselected">
    <ft-list-item></ft-list-item>
    <ft-list-item value="1">Option 1</ft-list-item>
    <ft-list-item value="2" selected>Option 2</ft-list-item>
    <ft-list-item value="3">Option 3</ft-list-item>
  </ft-select>
  <div>Value: <span id="preselectedValue"></span></div>

  <h2>Icon</h2>
  <ft-select label="has icon" icon="event">
    <ft-list-item graphic="icon" value="1">Option 1</ft-list-item>
    <ft-list-item graphic="icon" value="2">Option 2</ft-list-item>
    <ft-list-item graphic="icon" value="3">Option 3</ft-list-item>
  </ft-select>

  <h2>Required</h2>
  <ft-select required label="required filled" id="reqFilled">
    <ft-list-item></ft-list-item>
    <ft-list-item value="1">Option 1</ft-list-item>
    <ft-list-item value="2">Option 2</ft-list-item>
    <ft-list-item value="3">Option 3</ft-list-item>
  </ft-select>
  <div>Value: <span id="reqFilledValue"></span></div>
  <div>Valid: <span id="reqFilledValid"></span></div>

  <ft-select outlined required label="required outlined" id="reqOutlined">
    <ft-list-item></ft-list-item>
    <ft-list-item value="1">Option 1</ft-list-item>
    <ft-list-item value="2">Option 2</ft-list-item>
    <ft-list-item value="3">Option 3</ft-list-item>
  </ft-select>
  <div>Value: <span id="reqOutlinedValue"></span></div>
  <div>Valid: <span id="reqOutlinedValid"></span></div>

  <h2>Disabled</h2>
  <ft-select disabled label="disabled">
    <ft-list-item></ft-list-item>
    <ft-list-item disabled value="1">Option 1</ft-list-item>
    <ft-list-item value="2">Option 2</ft-list-item>
    <ft-list-item value="3">Option 3</ft-list-item>
  </ft-select>

  <h2>Disabled Options</h2>
  <ft-select label="disabled" id="disabledOptions">
    <ft-list-item></ft-list-item>
    <ft-list-item value="1">Option 1</ft-list-item>
    <ft-list-item disabled value="2"><div>Option 2</div></ft-list-item>
    <ft-list-item value="3">Option 3</ft-list-item>
  </ft-select>
  <div>Value: <span id="disabledOptionsValue"></span></div>

  <h2>Natural Menu Width</h2>

  <style>
    #naturalOptions {
      max-width: 200px;
    }
  </style>
  <ft-select label="natural width (long)" id="naturalOptions">
    <ft-list-item></ft-list-item>
    <ft-list-item value="1">Some Really Really Really long text</ft-list-item>
    <ft-list-item value="2">Some Really Really Really long text</ft-list-item>
    <ft-list-item value="3">Some Really Really Really long text</ft-list-item>
  </ft-select>
  <div>
    <ft-button raised label="toggle naturalMenuWidth" id="naturalButton">
    </ft-button>
  </div>
  <div>
    <pre>ft-select.naturalMenuWidth</pre>
    value:
    <span id="naturalValue">false</span>
  </div>

  <ft-select label="natural width (short)" id="shortNaturalOptions">
    <ft-list-item></ft-list-item>
    <ft-list-item value="1">Short text</ft-list-item>
    <ft-list-item value="2">Short text</ft-list-item>
    <ft-list-item value="3">Short text</ft-list-item>
  </ft-select>
  <div>
    <ft-button raised label="toggle naturalMenuWidth" id="shortNaturalButton">
    </ft-button>
  </div>
  <div>
    <pre>ft-select.naturalMenuWidth</pre>
    value:
    <span id="shortNaturalValue">false</span>
  </div>

  <div id="fullwidthParent">
    <ft-select label="fullwidth" id="fullwidthOptions">
      <ft-list-item></ft-list-item>
      <ft-list-item value="1">Short text</ft-list-item>
      <ft-list-item value="2">Short text</ft-list-item>
      <ft-list-item value="3">Short text</ft-list-item>
    </ft-select>
  </div>
  <div>
    <ft-button raised label="toggle fullwidth" id="fullwidthButton">
    </ft-button>
  </div>
  <div>
    <pre>ft-select.fullwidth</pre>
    value:
    <span id="fullwidthValue">false</span>
  </div>
</main>`;

export const Select = Template.bind({});
Select.args = {};
