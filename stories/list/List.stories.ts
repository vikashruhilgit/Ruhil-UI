import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/List',
  component: 'ru-list',
  decorators: [
    (story: any) => html` <style>
        .ru-list {
          border: 1px solid lightgray;
          max-width: 400px;
          margin-bottom: 8px;
        }

        .inverted {
          color: white;
          background-color: gray;
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

const Template: Story<ArgTypes> = () => html`
  <h1>Basic</h1>

  <ru-list id="basic">
    <ru-list-item selected>Item 0</ru-list-item>
    <ru-list-item>Item 1</ru-list-item>
    <ru-list-item>Item 2</ru-list-item>
    <ru-list-item>Item 3</ru-list-item>
  </ru-list>

  <div>Selected index: <span id="basicIndex"></span></div>

  <h1>Multi</h1>

  <ru-list class="ru-list" multi id="multi">
    <ru-list-item selected>Item 0</ru-list-item>
    <ru-list-item>Item 1</ru-list-item>
    <ru-list-item selected>Item 2</ru-list-item>
    <ru-list-item>Item 3</ru-list-item>
  </ru-list>

  <div>Selected index (Set&lt;number&gt;): <span id="multiIndex"></span></div>

  <h1>Activatable</h1>

  <ru-list activatable id="activatable">
    <ru-list-item>Item 0</ru-list-item>
    <ru-list-item selected activated>Item 1</ru-list-item>
    <ru-list-item>Item 2</ru-list-item>
    <ru-list-item>Item 3</ru-list-item>
  </ru-list>

  <div>Selected index: <span id="activatableIndex"></span></div>

  <h1>Non-interactive</h1>

  <ru-list noninteractive>
    <ru-list-item>Item 0</ru-list-item>
    <ru-list-item>Item 1</ru-list-item>
    <ru-list-item>Item 2</ru-list-item>
    <ru-list-item>Item 3</ru-list-item>
  </ru-list>

  <h1>Checklist</h1>

  <ru-list multi id="checklist">
    <ru-check-list-item selected>Item 0</ru-check-list-item>
    <ru-check-list-item>Item 1</ru-check-list-item>
    <ru-check-list-item left selected>Item 2 (left)</ru-check-list-item>
    <ru-check-list-item left>Item 3 (left)</ru-check-list-item>
    <ru-check-list-item disabled><span>disabled</span></ru-check-list-item>
  </ru-list>

  <div>
    Selected index (Set&lt;number&gt;): <span id="checklistIndex"></span>
  </div>

  <h1>Radio list</h1>

  <ru-list id="radio">
    <ru-radio-list-item group="a" selected>Item 0</ru-radio-list-item>
    <ru-radio-list-item group="a">Item 1</ru-radio-list-item>
    <ru-radio-list-item left group="a">Item 2 (left)</ru-radio-list-item>
    <ru-radio-list-item left group="a">Item 3 (left)</ru-radio-list-item>
  </ru-list>

  <div>Selected index: <span id="radioIndex"></span></div>

  <h1>Multi Radio list (with divider)</h1>

  <ru-list multi id="multiRadio">
    <ru-radio-list-item group="b">Item 0</ru-radio-list-item>
    <ru-radio-list-item group="b" selected>Item 1</ru-radio-list-item>
    <li divider role="separator"></li>
    <ru-radio-list-item group="c" selected>Item 2</ru-radio-list-item>
    <ru-radio-list-item group="c">Item 3</ru-radio-list-item>
  </ru-list>

  <div>
    Selected index (Set&lt;number&gt;): <span id="multiRadioIndex"></span>
  </div>

  <h1>Two-line (padded dividers)</h1>

  <ru-list multi>
    <ru-list-item twoline>
      <span>Item 0</span>
      <span slot="secondary">Secondary line</span>
    </ru-list-item>
    <li divider padded role="separator"></li>
    <ru-list-item twoline>
      <span>Item 1</span>
      <span slot="secondary">Secondary line</span>
    </ru-list-item>
    <li divider padded role="separator"></li>
    <ru-list-item twoline>
      <span>Item 2</span>
      <span slot="secondary">Secondary line</span>
    </ru-list-item>
    <li divider padded role="separator"></li>
    <ru-list-item twoline>
      <span>Item 3</span>
      <span slot="secondary">Secondary line</span>
    </ru-list-item>
  </ru-list>

  <h1>Graphics (inset dividers)</h1>

  <ru-list id="graphics" multi>
    <ru-list-item twoline graphic="avatar" noninteractive hasMeta>
      <span>Non-interactive two line avatar graphic</span>
      <span slot="secondary">email@domain.tld</span>
      <span slot="graphic" class="material-icons inverted">folder</span>
      <span slot="meta" class="material-icons">info</span>
    </ru-list-item>
    <li divider role="separator"></li>
    <ru-list-item graphic="icon" hasMeta>
      <span>Icon graphic</span>
      <span slot="graphic" class="material-icons inverted">folder</span>
      <span slot="meta" class="material-icons">info</span>
    </ru-list-item>
    <li divider inset role="separator"></li>
    <ru-list-item graphic="medium" hasMeta>
      <span>medium graphic</span>
      <span slot="graphic" class="material-icons inverted">folder</span>
      <span slot="meta" class="material-icons">info</span>
    </ru-list-item>
    <li divider inset role="separator"></li>
    <ru-list-item graphic="large" hasMeta>
      <span>large graphic</span>
      <span slot="graphic" class="material-icons inverted">folder</span>
      <span slot="meta" class="material-icons">info</span>
    </ru-list-item>
  </ru-list>

  <div>
    Selected index (Set&lt;number&gt;): <span id="graphicsIndex"></span>
  </div>

  <h1>Styled</h1>

  <style>
    #styled {
      --mdc-theme-primary: red;
      --mdc-list-vertical-padding: 0px;
      --mdc-list-side-padding: 0px;
    }
  </style>

  <ru-list activatable id="styled">
    <ru-list-item selected>Item 0</ru-list-item>
    <ru-list-item>Item 1</ru-list-item>
    <ru-list-item>Item 2</ru-list-item>
    <ru-list-item>Item 3</ru-list-item>
  </ru-list>

  <h1>Styled (Ripple Disabled)</h1>

  <style>
    /* disable ripple */
    #styledr {
      --mdc-ripple-color: transparent;
    }

    #styledr > * {
      transition: background-color 0.2s, color 0.2s;
    }

    #styledr [selected] {
      background-color: rgb(33, 33, 33);
      color: white;
    }

    #styledr [ru-list-item]:not([selected]):hover,
    #styledr [ru-list-item]:not([selected]):focus {
      background-color: rgba(33, 33, 33, 0.3);
    }

    #styledr [ru-list-item]:not([selected]):active {
      background-color: rgba(33, 33, 33, 0.4);
    }

    #styledr [ru-list-item][selected]:hover,
    #styledr [ru-list-item][selected]:focus {
      background-color: rgba(33, 33, 33, 0.9);
    }

    #styledr [ru-list-item][selected]:active {
      background-color: rgba(33, 33, 33, 0.8);
    }
  </style>

  <ru-list id="styledr">
    <ru-list-item selected>Item 0</ru-list-item>
    <ru-list-item>Item 1</ru-list-item>
    <ru-list-item>Item 2</ru-list-item>
    <ru-list-item>Item 3</ru-list-item>
  </ru-list>

  <h1>List - Demo</h1>

  <ru-list>
    <ru-list-item twoline graphic="avatar" noninteractive>
      <span>User Name</span>
      <span slot="secondary">user@domain.tld</span>
      <ru-icon slot="graphic" class="inverted">tag_faces</ru-icon>
    </ru-list-item>
    <li divider role="separator"></li>
    <ru-list-item graphic="icon">
      <slot>FAQ</slot>
      <ru-icon slot="graphic">help_outline</ru-icon>
    </ru-list-item>
    <ru-list-item graphic="icon">
      <slot>Sign out</slot>
      <ru-icon slot="graphic">exit_to_app</ru-icon>
    </ru-list-item>
  </ru-list>
`;

export const ALL = Template.bind({});

const BasicTemplate: Story<ArgTypes> = () => html`
  <ru-list>
    <ru-list-item>Item 0</ru-list-item>
    <ru-list-item>Item 1</ru-list-item>
    <ru-list-item>Item 2</ru-list-item>
    <ru-list-item>Item 3</ru-list-item>
  </ru-list>
`;
export const Basic = BasicTemplate.bind({});

const ActivatableTemplate: Story<ArgTypes> = () => html`
  <ru-list activatable>
    <ru-list-item>Item 0</ru-list-item>
    <ru-list-item selected activated>Item 1</ru-list-item>
    <ru-list-item>Item 2</ru-list-item>
    <ru-list-item>Item 3</ru-list-item>
  </ru-list>
`;
export const Activatable = ActivatableTemplate.bind({});

const MultiSelectableActivatableTemplate: Story<ArgTypes> = () => html`
  <ru-list activatable multi>
    <ru-list-item>Item 0</ru-list-item>
    <ru-list-item selected activated>Item 1</ru-list-item>
    <ru-list-item>Item 2</ru-list-item>
    <ru-list-item selected activated>Item 3</ru-list-item>
  </ru-list>
`;
export const MultiSelectableActivatable =
  MultiSelectableActivatableTemplate.bind({});

const LeadingGraphicTemplate: Story<ArgTypes> = () => html`
  <style>
    /* invert icon color */
    ru-icon {
      background-color: gray;
      color: white;
    }
  </style>

  <ru-list>
    <ru-list-item graphic="avatar">
      <span>Avatar graphic</span>
      <ru-icon slot="graphic">folder</ru-icon>
    </ru-list-item>
    <ru-list-item graphic="icon">
      <span>Icon graphic</span>
      <ru-icon slot="graphic">folder</ru-icon>
    </ru-list-item>
    <ru-list-item graphic="medium">
      <span>medium graphic</span>
      <ru-icon slot="graphic">folder</ru-icon>
    </ru-list-item>
    <ru-list-item graphic="large">
      <span>large graphic</span>
      <ru-icon slot="graphic">folder</ru-icon>
    </ru-list-item>
  </ru-list>
`;
export const LeadingGraphic = LeadingGraphicTemplate.bind({});

const MetaIconTemplate: Story<ArgTypes> = () => html`
  <ru-list>
    <ru-list-item hasMeta>
      <span>Location A</span>
      <ru-icon slot="meta">info</ru-icon>
    </ru-list-item>
    <ru-list-item hasMeta>
      <span>Location B</span>
      <ru-icon slot="meta">info</ru-icon>
    </ru-list-item>
    <ru-list-item hasMeta>
      <span>Location C</span>
      <ru-icon slot="meta">info</ru-icon>
    </ru-list-item>
    <ru-list-item hasMeta>
      <span>Location D</span>
      <ru-icon slot="meta">info</ru-icon>
    </ru-list-item>
  </ru-list>
`;
export const MetaIcon = MetaIconTemplate.bind({});

const TwoLineTemplate: Story<ArgTypes> = () => html`
  <ru-list>
    <ru-list-item twoline>
      <span>Item 0</span>
      <span slot="secondary">Secondary line</span>
    </ru-list-item>
    <ru-list-item twoline>
      <span>Item 1</span>
      <span slot="secondary">Secondary line</span>
    </ru-list-item>
    <ru-list-item twoline>
      <span>Item 2</span>
      <span slot="secondary">Secondary line</span>
    </ru-list-item>
    <ru-list-item twoline>
      <span>Item 3</span>
      <span slot="secondary">Secondary line</span>
    </ru-list-item>
  </ru-list>
`;
export const TwoLine = TwoLineTemplate.bind({});

const DividersTemplate: Story<ArgTypes> = () => html`
  <ru-list>
    <ru-list-item>Item 0</ru-list-item>
    <li divider role="separator"></li>
    <ru-list-item>Item 1</ru-list-item>
    <li divider padded role="separator"></li>
    <ru-list-item>Item 2</ru-list-item>
    <li divider padded role="separator"></li>
    <ru-list-item>Item 3</ru-list-item>
    <li divider padded role="separator"></li>
    <ru-list-item graphic="avatar">
      <span>avatar item</span>
      <ru-icon slot="graphic">folder</ru-icon>
    </ru-list-item>
    <li divider inset padded role="separator"></li>
    <ru-list-item graphic="avatar">
      <span>avatar item</span>
      <ru-icon slot="graphic">folder</ru-icon>
    </ru-list-item>
  </ru-list>
`;
export const Dividers = DividersTemplate.bind({});

const ChecklistTemplate: Story<ArgTypes> = () => html`
  <ru-list multi>
    <ru-check-list-item selected>Item 0</ru-check-list-item>
    <ru-check-list-item selected>Item 1</ru-check-list-item>
    <li divider role="separator" padded></li>
    <ru-check-list-item left selected>Item 2 (left)</ru-check-list-item>
    <ru-check-list-item left>Item 3 (left)</ru-check-list-item>
  </ru-list>
`;
export const Checklist = ChecklistTemplate.bind({});

const RadioListTemplate: Story<ArgTypes> = () => html`
  <ru-list>
    <ru-radio-list-item group="a" selected>Item 0</ru-radio-list-item>
    <ru-radio-list-item group="a">Item 1</ru-radio-list-item>
    <li divider padded role="separator"></li>
    <ru-radio-list-item left group="a">Item 2 (left)</ru-radio-list-item>
    <ru-radio-list-item left group="a">Item 3 (left)</ru-radio-list-item>
  </ru-list>
`;
export const RadioList = RadioListTemplate.bind({});

const MultiRadioListTemplate: Story<ArgTypes> = () => html`
  <ru-list>
    <ru-radio-list-item group="a" selected>Item 0</ru-radio-list-item>
    <ru-radio-list-item group="a">Item 1</ru-radio-list-item>
    <li divider padded role="separator"></li>
    <ru-radio-list-item left group="a">Item 2 (left)</ru-radio-list-item>
    <ru-radio-list-item left group="a">Item 3 (left)</ru-radio-list-item>
  </ru-list>
`;
export const MultiRadioList = MultiRadioListTemplate.bind({});

const ItensTemplate: Story<ArgTypes> = () => html`
  <style>
    .inverted {
      background-color: gray;
      color: white;
    }
  </style>
  <ru-list>
    <ru-list-item twoline graphic="avatar" noninteractive>
      <span>User Name</span>
      <span slot="secondary">user@domain.tld</span>
      <ru-icon slot="graphic" class="inverted">tag_faces</ru-icon>
    </ru-list-item>
    <li divider role="separator"></li>
    <ru-list-item graphic="icon">
      <slot>FAQ</slot>
      <ru-icon slot="graphic">help_outline</ru-icon>
    </ru-list-item>
    <ru-list-item graphic="icon">
      <slot>Sign out</slot>
      <ru-icon slot="graphic">exit_to_app</ru-icon>
    </ru-list-item>
  </ru-list>
`;
export const Items = ItensTemplate.bind({});
