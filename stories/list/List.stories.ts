import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Firstech UI/Component/List',
  component: 'ft-list',
  decorators: [
    (story: any) => html` <style>
        .ft-list {
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

  <ft-list id="basic">
    <ft-list-item selected>Item 0</ft-list-item>
    <ft-list-item>Item 1</ft-list-item>
    <ft-list-item>Item 2</ft-list-item>
    <ft-list-item>Item 3</ft-list-item>
  </ft-list>

  <div>Selected index: <span id="basicIndex"></span></div>

  <h1>Multi</h1>

  <ft-list class="ft-list" multi id="multi">
    <ft-list-item selected>Item 0</ft-list-item>
    <ft-list-item>Item 1</ft-list-item>
    <ft-list-item selected>Item 2</ft-list-item>
    <ft-list-item>Item 3</ft-list-item>
  </ft-list>

  <div>Selected index (Set&lt;number&gt;): <span id="multiIndex"></span></div>

  <h1>Activatable</h1>

  <ft-list activatable id="activatable">
    <ft-list-item>Item 0</ft-list-item>
    <ft-list-item selected activated>Item 1</ft-list-item>
    <ft-list-item>Item 2</ft-list-item>
    <ft-list-item>Item 3</ft-list-item>
  </ft-list>

  <div>Selected index: <span id="activatableIndex"></span></div>

  <h1>Non-interactive</h1>

  <ft-list noninteractive>
    <ft-list-item>Item 0</ft-list-item>
    <ft-list-item>Item 1</ft-list-item>
    <ft-list-item>Item 2</ft-list-item>
    <ft-list-item>Item 3</ft-list-item>
  </ft-list>

  <h1>Checklist</h1>

  <ft-list multi id="checklist">
    <ft-check-list-item selected>Item 0</ft-check-list-item>
    <ft-check-list-item>Item 1</ft-check-list-item>
    <ft-check-list-item left selected>Item 2 (left)</ft-check-list-item>
    <ft-check-list-item left>Item 3 (left)</ft-check-list-item>
    <ft-check-list-item disabled><span>disabled</span></ft-check-list-item>
  </ft-list>

  <div>
    Selected index (Set&lt;number&gt;): <span id="checklistIndex"></span>
  </div>

  <h1>Radio list</h1>

  <ft-list id="radio">
    <ft-radio-list-item group="a" selected>Item 0</ft-radio-list-item>
    <ft-radio-list-item group="a">Item 1</ft-radio-list-item>
    <ft-radio-list-item left group="a">Item 2 (left)</ft-radio-list-item>
    <ft-radio-list-item left group="a">Item 3 (left)</ft-radio-list-item>
  </ft-list>

  <div>Selected index: <span id="radioIndex"></span></div>

  <h1>Multi Radio list (with divider)</h1>

  <ft-list multi id="multiRadio">
    <ft-radio-list-item group="b">Item 0</ft-radio-list-item>
    <ft-radio-list-item group="b" selected>Item 1</ft-radio-list-item>
    <li divider role="separator"></li>
    <ft-radio-list-item group="c" selected>Item 2</ft-radio-list-item>
    <ft-radio-list-item group="c">Item 3</ft-radio-list-item>
  </ft-list>

  <div>
    Selected index (Set&lt;number&gt;): <span id="multiRadioIndex"></span>
  </div>

  <h1>Two-line (padded dividers)</h1>

  <ft-list multi>
    <ft-list-item twoline>
      <span>Item 0</span>
      <span slot="secondary">Secondary line</span>
    </ft-list-item>
    <li divider padded role="separator"></li>
    <ft-list-item twoline>
      <span>Item 1</span>
      <span slot="secondary">Secondary line</span>
    </ft-list-item>
    <li divider padded role="separator"></li>
    <ft-list-item twoline>
      <span>Item 2</span>
      <span slot="secondary">Secondary line</span>
    </ft-list-item>
    <li divider padded role="separator"></li>
    <ft-list-item twoline>
      <span>Item 3</span>
      <span slot="secondary">Secondary line</span>
    </ft-list-item>
  </ft-list>

  <h1>Graphics (inset dividers)</h1>

  <ft-list id="graphics" multi>
    <ft-list-item twoline graphic="avatar" noninteractive hasMeta>
      <span>Non-interactive two line avatar graphic</span>
      <span slot="secondary">email@domain.tld</span>
      <span slot="graphic" class="material-icons inverted">folder</span>
      <span slot="meta" class="material-icons">info</span>
    </ft-list-item>
    <li divider role="separator"></li>
    <ft-list-item graphic="icon" hasMeta>
      <span>Icon graphic</span>
      <span slot="graphic" class="material-icons inverted">folder</span>
      <span slot="meta" class="material-icons">info</span>
    </ft-list-item>
    <li divider inset role="separator"></li>
    <ft-list-item graphic="medium" hasMeta>
      <span>medium graphic</span>
      <span slot="graphic" class="material-icons inverted">folder</span>
      <span slot="meta" class="material-icons">info</span>
    </ft-list-item>
    <li divider inset role="separator"></li>
    <ft-list-item graphic="large" hasMeta>
      <span>large graphic</span>
      <span slot="graphic" class="material-icons inverted">folder</span>
      <span slot="meta" class="material-icons">info</span>
    </ft-list-item>
  </ft-list>

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

  <ft-list activatable id="styled">
    <ft-list-item selected>Item 0</ft-list-item>
    <ft-list-item>Item 1</ft-list-item>
    <ft-list-item>Item 2</ft-list-item>
    <ft-list-item>Item 3</ft-list-item>
  </ft-list>

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

    #styledr [ft-list-item]:not([selected]):hover,
    #styledr [ft-list-item]:not([selected]):focus {
      background-color: rgba(33, 33, 33, 0.3);
    }

    #styledr [ft-list-item]:not([selected]):active {
      background-color: rgba(33, 33, 33, 0.4);
    }

    #styledr [ft-list-item][selected]:hover,
    #styledr [ft-list-item][selected]:focus {
      background-color: rgba(33, 33, 33, 0.9);
    }

    #styledr [ft-list-item][selected]:active {
      background-color: rgba(33, 33, 33, 0.8);
    }
  </style>

  <ft-list id="styledr">
    <ft-list-item selected>Item 0</ft-list-item>
    <ft-list-item>Item 1</ft-list-item>
    <ft-list-item>Item 2</ft-list-item>
    <ft-list-item>Item 3</ft-list-item>
  </ft-list>

  <h1>List - Demo</h1>

  <ft-list>
    <ft-list-item twoline graphic="avatar" noninteractive>
      <span>User Name</span>
      <span slot="secondary">user@domain.tld</span>
      <ft-icon slot="graphic" class="inverted">tag_faces</ft-icon>
    </ft-list-item>
    <li divider role="separator"></li>
    <ft-list-item graphic="icon">
      <slot>FAQ</slot>
      <ft-icon slot="graphic">help_outline</ft-icon>
    </ft-list-item>
    <ft-list-item graphic="icon">
      <slot>Sign out</slot>
      <ft-icon slot="graphic">exit_to_app</ft-icon>
    </ft-list-item>
  </ft-list>
`;

export const ALL = Template.bind({});

const BasicTemplate: Story<ArgTypes> = () => html`
  <ft-list>
    <ft-list-item>Item 0</ft-list-item>
    <ft-list-item>Item 1</ft-list-item>
    <ft-list-item>Item 2</ft-list-item>
    <ft-list-item>Item 3</ft-list-item>
  </ft-list>
`;
export const Basic = BasicTemplate.bind({});

const ActivatableTemplate: Story<ArgTypes> = () => html`
  <ft-list activatable>
    <ft-list-item>Item 0</ft-list-item>
    <ft-list-item selected activated>Item 1</ft-list-item>
    <ft-list-item>Item 2</ft-list-item>
    <ft-list-item>Item 3</ft-list-item>
  </ft-list>
`;
export const Activatable = ActivatableTemplate.bind({});

const MultiSelectableActivatableTemplate: Story<ArgTypes> = () => html`
  <ft-list activatable multi>
    <ft-list-item>Item 0</ft-list-item>
    <ft-list-item selected activated>Item 1</ft-list-item>
    <ft-list-item>Item 2</ft-list-item>
    <ft-list-item selected activated>Item 3</ft-list-item>
  </ft-list>
`;
export const MultiSelectableActivatable =
  MultiSelectableActivatableTemplate.bind({});

const LeadingGraphicTemplate: Story<ArgTypes> = () => html`
  <style>
    /* invert icon color */
    ft-icon {
      background-color: gray;
      color: white;
    }
  </style>

  <ft-list>
    <ft-list-item graphic="avatar">
      <span>Avatar graphic</span>
      <ft-icon slot="graphic">folder</ft-icon>
    </ft-list-item>
    <ft-list-item graphic="icon">
      <span>Icon graphic</span>
      <ft-icon slot="graphic">folder</ft-icon>
    </ft-list-item>
    <ft-list-item graphic="medium">
      <span>medium graphic</span>
      <ft-icon slot="graphic">folder</ft-icon>
    </ft-list-item>
    <ft-list-item graphic="large">
      <span>large graphic</span>
      <ft-icon slot="graphic">folder</ft-icon>
    </ft-list-item>
  </ft-list>
`;
export const LeadingGraphic = LeadingGraphicTemplate.bind({});

const MetaIconTemplate: Story<ArgTypes> = () => html`
  <ft-list>
    <ft-list-item hasMeta>
      <span>Location A</span>
      <ft-icon slot="meta">info</ft-icon>
    </ft-list-item>
    <ft-list-item hasMeta>
      <span>Location B</span>
      <ft-icon slot="meta">info</ft-icon>
    </ft-list-item>
    <ft-list-item hasMeta>
      <span>Location C</span>
      <ft-icon slot="meta">info</ft-icon>
    </ft-list-item>
    <ft-list-item hasMeta>
      <span>Location D</span>
      <ft-icon slot="meta">info</ft-icon>
    </ft-list-item>
  </ft-list>
`;
export const MetaIcon = MetaIconTemplate.bind({});

const TwoLineTemplate: Story<ArgTypes> = () => html`
  <ft-list>
    <ft-list-item twoline>
      <span>Item 0</span>
      <span slot="secondary">Secondary line</span>
    </ft-list-item>
    <ft-list-item twoline>
      <span>Item 1</span>
      <span slot="secondary">Secondary line</span>
    </ft-list-item>
    <ft-list-item twoline>
      <span>Item 2</span>
      <span slot="secondary">Secondary line</span>
    </ft-list-item>
    <ft-list-item twoline>
      <span>Item 3</span>
      <span slot="secondary">Secondary line</span>
    </ft-list-item>
  </ft-list>
`;
export const TwoLine = TwoLineTemplate.bind({});

const DividersTemplate: Story<ArgTypes> = () => html`
  <ft-list>
    <ft-list-item>Item 0</ft-list-item>
    <li divider role="separator"></li>
    <ft-list-item>Item 1</ft-list-item>
    <li divider padded role="separator"></li>
    <ft-list-item>Item 2</ft-list-item>
    <li divider padded role="separator"></li>
    <ft-list-item>Item 3</ft-list-item>
    <li divider padded role="separator"></li>
    <ft-list-item graphic="avatar">
      <span>avatar item</span>
      <ft-icon slot="graphic">folder</ft-icon>
    </ft-list-item>
    <li divider inset padded role="separator"></li>
    <ft-list-item graphic="avatar">
      <span>avatar item</span>
      <ft-icon slot="graphic">folder</ft-icon>
    </ft-list-item>
  </ft-list>
`;
export const Dividers = DividersTemplate.bind({});

const ChecklistTemplate: Story<ArgTypes> = () => html`
  <ft-list multi>
    <ft-check-list-item selected>Item 0</ft-check-list-item>
    <ft-check-list-item selected>Item 1</ft-check-list-item>
    <li divider role="separator" padded></li>
    <ft-check-list-item left selected>Item 2 (left)</ft-check-list-item>
    <ft-check-list-item left>Item 3 (left)</ft-check-list-item>
  </ft-list>
`;
export const Checklist = ChecklistTemplate.bind({});

const RadioListTemplate: Story<ArgTypes> = () => html`
  <ft-list>
    <ft-radio-list-item group="a" selected>Item 0</ft-radio-list-item>
    <ft-radio-list-item group="a">Item 1</ft-radio-list-item>
    <li divider padded role="separator"></li>
    <ft-radio-list-item left group="a">Item 2 (left)</ft-radio-list-item>
    <ft-radio-list-item left group="a">Item 3 (left)</ft-radio-list-item>
  </ft-list>
`;
export const RadioList = RadioListTemplate.bind({});

const MultiRadioListTemplate: Story<ArgTypes> = () => html`
  <ft-list>
    <ft-radio-list-item group="a" selected>Item 0</ft-radio-list-item>
    <ft-radio-list-item group="a">Item 1</ft-radio-list-item>
    <li divider padded role="separator"></li>
    <ft-radio-list-item left group="a">Item 2 (left)</ft-radio-list-item>
    <ft-radio-list-item left group="a">Item 3 (left)</ft-radio-list-item>
  </ft-list>
`;
export const MultiRadioList = MultiRadioListTemplate.bind({});

const ItensTemplate: Story<ArgTypes> = () => html`
  <style>
    .inverted {
      background-color: gray;
      color: white;
    }
  </style>
  <ft-list>
    <ft-list-item twoline graphic="avatar" noninteractive>
      <span>User Name</span>
      <span slot="secondary">user@domain.tld</span>
      <ft-icon slot="graphic" class="inverted">tag_faces</ft-icon>
    </ft-list-item>
    <li divider role="separator"></li>
    <ft-list-item graphic="icon">
      <slot>FAQ</slot>
      <ft-icon slot="graphic">help_outline</ft-icon>
    </ft-list-item>
    <ft-list-item graphic="icon">
      <slot>Sign out</slot>
      <ft-icon slot="graphic">exit_to_app</ft-icon>
    </ft-list-item>
  </ft-list>
`;
export const Items = ItensTemplate.bind({});
