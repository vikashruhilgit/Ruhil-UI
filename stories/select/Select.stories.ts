import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Form Component/Select',
  component: 'ru-select',
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

        ru-select ~ div,
        div ~ ru-select {
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
  <ru-select label="filled" id="filled">
    <ru-list-item></ru-list-item>
    <ru-list-item value="1">Option 1</ru-list-item>
    <ru-list-item value="2">Option 2</ru-list-item>
    <ru-list-item value="3">Option 3</ru-list-item>
  </ru-select>
  <div>Value: <span id="filledValue"></span></div>

  <h2>Outlined</h2>
  <ru-select outlined label="outlined" id="outlined">
    <ru-list-item></ru-list-item>
    <ru-list-item value="1">Option 1</ru-list-item>
    <ru-list-item value="2">Option 2</ru-list-item>
    <ru-list-item value="3">Option 3</ru-list-item>
  </ru-select>
  <div>Value: <span id="outlinedValue"></span></div>

  <h2>Preselected</h2>
  <ru-select label="preselected" id="preselected">
    <ru-list-item></ru-list-item>
    <ru-list-item value="1">Option 1</ru-list-item>
    <ru-list-item value="2" selected>Option 2</ru-list-item>
    <ru-list-item value="3">Option 3</ru-list-item>
  </ru-select>
  <div>Value: <span id="preselectedValue"></span></div>

  <h2>Icon</h2>
  <ru-select label="has icon" icon="event">
    <ru-list-item graphic="icon" value="1">Option 1</ru-list-item>
    <ru-list-item graphic="icon" value="2">Option 2</ru-list-item>
    <ru-list-item graphic="icon" value="3">Option 3</ru-list-item>
  </ru-select>

  <h2>Required</h2>
  <ru-select required label="required filled" id="reqFilled">
    <ru-list-item></ru-list-item>
    <ru-list-item value="1">Option 1</ru-list-item>
    <ru-list-item value="2">Option 2</ru-list-item>
    <ru-list-item value="3">Option 3</ru-list-item>
  </ru-select>
  <div>Value: <span id="reqFilledValue"></span></div>
  <div>Valid: <span id="reqFilledValid"></span></div>

  <ru-select outlined required label="required outlined" id="reqOutlined">
    <ru-list-item></ru-list-item>
    <ru-list-item value="1">Option 1</ru-list-item>
    <ru-list-item value="2">Option 2</ru-list-item>
    <ru-list-item value="3">Option 3</ru-list-item>
  </ru-select>
  <div>Value: <span id="reqOutlinedValue"></span></div>
  <div>Valid: <span id="reqOutlinedValid"></span></div>

  <h2>Disabled</h2>
  <ru-select disabled label="disabled">
    <ru-list-item></ru-list-item>
    <ru-list-item disabled value="1">Option 1</ru-list-item>
    <ru-list-item value="2">Option 2</ru-list-item>
    <ru-list-item value="3">Option 3</ru-list-item>
  </ru-select>

  <h2>Disabled Options</h2>
  <ru-select label="disabled" id="disabledOptions">
    <ru-list-item></ru-list-item>
    <ru-list-item value="1">Option 1</ru-list-item>
    <ru-list-item disabled value="2"><div>Option 2</div></ru-list-item>
    <ru-list-item value="3">Option 3</ru-list-item>
  </ru-select>
  <div>Value: <span id="disabledOptionsValue"></span></div>

  <h2>Natural Menu Width</h2>

  <style>
    #naturalOptions {
      max-width: 200px;
    }
  </style>
  <ru-select label="natural width (long)" id="naturalOptions">
    <ru-list-item></ru-list-item>
    <ru-list-item value="1">Some Really Really Really long text</ru-list-item>
    <ru-list-item value="2">Some Really Really Really long text</ru-list-item>
    <ru-list-item value="3">Some Really Really Really long text</ru-list-item>
  </ru-select>
  <div>
    <ru-button raised label="toggle naturalMenuWidth" id="naturalButton">
    </ru-button>
  </div>
  <div>
    <pre>ru-select.naturalMenuWidth</pre>
    value:
    <span id="naturalValue">false</span>
  </div>

  <ru-select label="natural width (short)" id="shortNaturalOptions">
    <ru-list-item></ru-list-item>
    <ru-list-item value="1">Short text</ru-list-item>
    <ru-list-item value="2">Short text</ru-list-item>
    <ru-list-item value="3">Short text</ru-list-item>
  </ru-select>
  <div>
    <ru-button raised label="toggle naturalMenuWidth" id="shortNaturalButton">
    </ru-button>
  </div>
  <div>
    <pre>ru-select.naturalMenuWidth</pre>
    value:
    <span id="shortNaturalValue">false</span>
  </div>

  <div id="fullwidthParent">
    <ru-select label="fullwidth" id="fullwidthOptions">
      <ru-list-item></ru-list-item>
      <ru-list-item value="1">Short text</ru-list-item>
      <ru-list-item value="2">Short text</ru-list-item>
      <ru-list-item value="3">Short text</ru-list-item>
    </ru-select>
  </div>
  <div>
    <ru-button raised label="toggle fullwidth" id="fullwidthButton">
    </ru-button>
  </div>
  <div>
    <pre>ru-select.fullwidth</pre>
    value:
    <span id="fullwidthValue">false</span>
  </div>
</main>`;

export const Select = Template.bind({});
Select.args = {};
