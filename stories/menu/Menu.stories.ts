import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/Menu',
  decorators: [
    (story: any) => html` <style>
        main > div {
          margin-bottom: 16px;
        }

        .scrollable {
          border: solid 1px black;
          overflow-y: scroll;
          height: 100px;
        }

        .scrollable .spacer {
          height: 1000px;
        }

        #absoluteX,
        #absoluteY {
          width: 100px;
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

const clickHandler = (e: Event) => {
  if (e.target) {
    const el: any = e.target;
    const menu = el.nextElementSibling;
    if (menu) menu.open = !menu.open;
  }
};

const changeHandler = (e: Event) => {
  if (e.target) {
    const el: any = e.target;
    const menu = el.previousElementSibling;
    if (menu) menu.corner = el.value;
  }
};

const Template: Story<ArgTypes> = () => html` <main>
  <div style="position:relative;">
    <ru-button
      @click=${clickHandler}
      id="basicButton"
      raised
      label="Open Basic Menu"
    ></ru-button>
    <ru-menu id="basicMenu">
      <ru-list-item>one</ru-list-item>
      <ru-list-item>two</ru-list-item>
      <ru-list-item>three</ru-list-item>
      <ru-list-item disabled><div>four</div></ru-list-item>
      <li divider></li>
      <ru-list-item>aaa</ru-list-item>
      <ru-list-item>bbb</ru-list-item>
    </ru-menu>
  </div>

  <div style="position:relative;">
    <ru-button
      @click=${clickHandler}
      id="cornerButton"
      raised
      label="Open Menu With Corner"
    >
    </ru-button>
    <ru-menu .corner=${'TOP_END'} id="cornerMenu">
      <ru-list-item>one</ru-list-item>
      <ru-list-item>two</ru-list-item>
      <ru-list-item>three</ru-list-item>
      <ru-list-item disabled><div>four</div></ru-list-item>
      <li divider></li>
      <ru-list-item>aaa</ru-list-item>
      <ru-list-item>bbb</ru-list-item>
    </ru-menu>

    <ru-select
      @change=${changeHandler}
      outlined
      id="cornerSelect"
      label="Menu Corner"
    >
      <ru-list-item selected></ru-list-item>
      <ru-list-item value="TOP_LEFT">TOP_LEFT</ru-list-item>
      <ru-list-item value="TOP_RIGHT">TOP_RIGHT</ru-list-item>
      <ru-list-item value="BOTTOM_LEFT">BOTTOM_LEFT</ru-list-item>
      <ru-list-item value="BOTTOM_RIGHT">BOTTOM_RIGHT</ru-list-item>
      <ru-list-item value="TOP_START">TOP_START</ru-list-item>
      <ru-list-item value="TOP_END">TOP_END</ru-list-item>
      <ru-list-item value="BOTTOM_START">BOTTOM_START</ru-list-item>
      <ru-list-item value="BOTTOM_END">BOTTOM_END</ru-list-item>
    </ru-select>
  </div>

  <div style="position:relative;">
    <ru-button
      @click=${clickHandler}
      id="quickButton"
      raised
      label="Open Quick Menu"
    ></ru-button>
    <ru-menu quick id="quickMenu">
      <ru-list-item>one</ru-list-item>
      <ru-list-item>two</ru-list-item>
      <ru-list-item>three</ru-list-item>
      <ru-list-item disabled><div>four</div></ru-list-item>
      <li divider></li>
      <ru-list-item>aaa</ru-list-item>
      <ru-list-item>bbb</ru-list-item>
    </ru-menu>
  </div>

  <div class="scrollable">
    <span>
      <ru-button
        @click=${clickHandler}
        id="fixedButton"
        raised
        label="Open Fixed Menu"
      ></ru-button>
      <ru-menu fixed id="fixedMenu">
        <ru-list-item>one</ru-list-item>
        <ru-list-item>two</ru-list-item>
        <ru-list-item>three</ru-list-item>
        <ru-list-item disabled><div>four</div></ru-list-item>
        <li divider></li>
        <ru-list-item>aaa</ru-list-item>
        <ru-list-item>bbb</ru-list-item>
      </ru-menu>
    </span>

    <span style="position:relative;">
      <ru-button
        @click=${clickHandler}
        id="nonfixedButton"
        raised
        label="Open Non-Fixed Menu"
      ></ru-button>
      <ru-menu id="nonfixedMenu">
        <ru-list-item>one</ru-list-item>
        <ru-list-item>two</ru-list-item>
        <ru-list-item>three</ru-list-item>
        <ru-list-item disabled><div>four</div></ru-list-item>
        <li divider></li>
        <ru-list-item>aaa</ru-list-item>
        <ru-list-item>bbb</ru-list-item>
      </ru-menu>
    </span>
    <div>Open each menu and then scroll this div</div>
    <div class="spacer"></div>
  </div>

  <div>
    <ru-button
      @click=${clickHandler}
      id="absoluteButton"
      raised
      label="Open Absolute Menu (no anchor)"
    ></ru-button>
    <ru-menu absolute x="0" y="0" id="absoluteMenu">
      <ru-list-item>one</ru-list-item>
      <ru-list-item>two</ru-list-item>
      <ru-list-item>three</ru-list-item>
      <ru-list-item disabled><div>four</div></ru-list-item>
      <li divider></li>
      <ru-list-item>aaa</ru-list-item>
      <ru-list-item>bbb</ru-list-item>
    </ru-menu>

    <ru-textfield type="number" label="x" outlined id="absoluteX" value="0">
    </ru-textfield>
    <ru-textfield type="number" label="y" outlined id="absoluteY" value="0">
    </ru-textfield>
  </div>

  <div style="position:relative;">
    <ru-button
      @click=${clickHandler}
      id="activatableButton"
      raised
      label="Open Activatable Menu"
    ></ru-button>
    <ru-menu activatable id="activatableMenu">
      <ru-list-item>one</ru-list-item>
      <ru-list-item>two</ru-list-item>
      <ru-list-item>three</ru-list-item>
      <ru-list-item disabled><div>four</div></ru-list-item>
      <li divider></li>
      <ru-list-item>aaa</ru-list-item>
      <ru-list-item>bbb</ru-list-item>
    </ru-menu>
  </div>

  <div style="position:relative;">
    <ru-button
      @click=${clickHandler}
      id="multiButton"
      raised
      label="Open Multi (activatable) Menu"
    ></ru-button>
    <ru-menu multi activatable id="multiMenu">
      <ru-list-item selected activated>one</ru-list-item>
      <ru-list-item>two</ru-list-item>
      <ru-list-item selected activated>three</ru-list-item>
      <ru-list-item disabled><div>four</div></ru-list-item>
      <li divider></li>
      <ru-list-item>aaa</ru-list-item>
      <ru-list-item>bbb</ru-list-item>
    </ru-menu>
  </div>

  <div style="position:relative;">
    <style>
      #groupedMenu ru-list-item:not([selected]) ru-icon {
        display: none;
      }
    </style>

    <ru-button
      @click=${clickHandler}
      id="groupedButton"
      raised
      label="Open Grouped Menu"
    ></ru-button>
    <ru-menu multi id="groupedMenu">
      <ru-list-item selected group="a" graphic="icon">
        <ru-icon slot="graphic">check</ru-icon>
        <span>a-one</span>
      </ru-list-item>
      <ru-list-item group="a" graphic="icon">
        <ru-icon slot="graphic">check</ru-icon>
        <span>a-two</span>
      </ru-list-item>
      <ru-list-item group="a" graphic="icon">
        <ru-icon slot="graphic">check</ru-icon>
        <span>a-three</span>
      </ru-list-item>
      <li divider></li>
      <ru-list-item selected group="b" graphic="icon">
        <ru-icon slot="graphic">check</ru-icon>
        <span>b-one</span>
      </ru-list-item>
      <ru-list-item group="b" graphic="icon">
        <ru-icon slot="graphic">check</ru-icon>
        <span>b-two</span>
      </ru-list-item>
    </ru-menu>
  </div>

  <div style="position:relative;">
    <ru-button
      @click=${clickHandler}
      id="dfsButton"
      raised
      label="Open Menu With Default Focus"
    >
    </ru-button>
    <ru-menu id="dfsMenu">
      <ru-list-item>one</ru-list-item>
      <ru-list-item>two</ru-list-item>
      <ru-list-item>three</ru-list-item>
      <ru-list-item disabled><div>four</div></ru-list-item>
      <li divider></li>
      <ru-list-item>aaa</ru-list-item>
      <ru-list-item>bbb</ru-list-item>
    </ru-menu>

    <ru-select outlined id="dfsSelect" label="Menu Default Focus">
      <ru-list-item value="NONE">NONE</ru-list-item>
      <ru-list-item value="LIST_ROOT" selected>LIST_ROOT</ru-list-item>
      <ru-list-item value="FIRST_ITEM">FIRST_ITEM</ru-list-item>
      <ru-list-item value="LAST_ITEM">LAST_ITEM</ru-list-item>
    </ru-select>
  </div>

  <div>
    <h3>Absolute w/ anchor</h3>
    <div>This is reusing the same menu and changing the anchor</div>
    <ru-button
      @click=${clickHandler}
      id="absoluteLeftButton"
      raised
      label="anchor = this"
    >
    </ru-button>
    <ru-menu absolute id="absoluteAnchorMenu">
      <ru-list-item>one</ru-list-item>
      <ru-list-item>two</ru-list-item>
      <ru-list-item>three</ru-list-item>
      <ru-list-item disabled><div>four</div></ru-list-item>
      <li divider></li>
      <ru-list-item>aaa</ru-list-item>
      <ru-list-item>bbb</ru-list-item>
    </ru-menu>
  </div>
</main>`;

export const ALL = Template.bind({});

const BasicTemplate: Story<ArgTypes> = () => html`
  <div style="position: relative;">
    <ru-button
      @click=${clickHandler}
      id="button"
      raised
      label="Open Menu"
    ></ru-button>
    <ru-menu id="menu">
      <ru-list-item>Item 0</ru-list-item>
      <ru-list-item>Item 1</ru-list-item>
      <ru-list-item>Item 2</ru-list-item>
      <ru-list-item>Item 3</ru-list-item>
    </ru-menu>
  </div>
`;
export const Basic = BasicTemplate.bind({});

const ActivatableTemplate: Story<ArgTypes> = () => html`
  <div style="position: relative;">
    <ru-button
      @click=${clickHandler}
      id="button"
      raised
      label="Open Menu"
    ></ru-button>
    <ru-menu activatable id="menu">
      <ru-list-item>Item 0</ru-list-item>
      <ru-list-item selected activated>Item 1</ru-list-item>
      <ru-list-item>Item 2</ru-list-item>
      <ru-list-item>Item 3</ru-list-item>
    </ru-menu>
  </div>
`;
export const Activatable = ActivatableTemplate.bind({});

const MultiSelectableActivatableTemplate: Story<ArgTypes> = () => html`
  <div style="position: relative;">
    <ru-button
      @click=${clickHandler}
      id="button"
      raised
      label="Open Menu"
    ></ru-button>
    <ru-menu activatable multi id="menu">
      <ru-list-item>Item 0</ru-list-item>
      <ru-list-item selected activated>Item 1</ru-list-item>
      <ru-list-item>Item 2</ru-list-item>
      <ru-list-item selected activated>Item 3</ru-list-item>
    </ru-menu>
  </div>
`;
export const MultiSelectableActivatable =
  MultiSelectableActivatableTemplate.bind({});

const AbsoluteTemplate: Story<ArgTypes> = () => html`
  <div style="position: relative;">
    <ru-button
      @click=${clickHandler}
      id="button"
      raised
      label="Open Menu"
    ></ru-button>
    <ru-menu absolute x="50" y="100" id="menu">
      <ru-list-item>Item 0</ru-list-item>
      <ru-list-item>Item 1</ru-list-item>
      <ru-list-item>Item 2</ru-list-item>
      <ru-list-item>Item 3</ru-list-item>
    </ru-menu>
  </div>
`;
export const Absolute = AbsoluteTemplate.bind({});

const FixedTemplate: Story<ArgTypes> = () => html`
  <div style="position: relative;">
    <ru-button
      @click=${clickHandler}
      id="button"
      raised
      label="Open Menu"
    ></ru-button>
    <ru-menu fixed id="menu">
      <ru-list-item>Item 0</ru-list-item>
      <ru-list-item>Item 1</ru-list-item>
      <ru-list-item>Item 2</ru-list-item>
      <ru-list-item>Item 3</ru-list-item>
    </ru-menu>
  </div>
`;
export const Fixed = FixedTemplate.bind({});

const SelectionGroupsTemplate: Story<ArgTypes> = () => html`
  <style>
    /* Hide the icon of unselected menu items that are in a group */
    #menu2 > [ru-list-item][group]:not([selected]) [slot='graphic'] {
      display: none;
    }
  </style>
  <div style="position:relative;">
    <ru-button
      @click=${clickHandler}
      id="button"
      raised
      label="Open Menu"
    ></ru-button>

    <ru-menu multi id="menu2">
      <ru-list-item group="a" graphic="icon">
        <ru-icon slot="graphic">check</ru-icon>
        <span>Item 0</span>
      </ru-list-item>
      <ru-list-item group="a" graphic="icon" selected>
        <ru-icon slot="graphic">check</ru-icon>
        <span>Item 1</span>
      </ru-list-item>
      <ru-list-item group="a" graphic="icon">
        <ru-icon slot="graphic">check</ru-icon>
        <span>Item 2</span>
      </ru-list-item>
      <li divider role="separator"></li>
      <ru-list-item group="b" graphic="icon" selected>
        <ru-icon slot="graphic">check</ru-icon>
        <span>Item 3</span>
      </ru-list-item>
      <ru-list-item group="b" graphic="icon">
        <ru-icon slot="graphic">check</ru-icon>
        <span>Item 4</span>
      </ru-list-item>
    </ru-menu>
  </div>
`;
export const SelectionGroups = SelectionGroupsTemplate.bind({});

const StyledTemplate: Story<ArgTypes> = () => html`
  <style>
    #menu1 {
      --mdc-menu-min-width: 200px;
      --mdc-menu-item-height: 30px;
      --mdc-theme-surface: aliceblue;

      /* inherits the styles of ru-list internally */
      --mdc-theme-primary: blue;
      --mdc-list-vertical-padding: 0px;
      --mdc-list-side-padding: 30px;
    }
  </style>
  <div style="position: relative;">
    <ru-button
      @click=${clickHandler}
      id="button"
      raised
      label="Open Menu"
    ></ru-button>
    <ru-menu activatable multi id="menu1">
      <ru-list-item selected activated>Item 0</ru-list-item>
      <ru-list-item selected activated>Item 1</ru-list-item>
      <ru-list-item>Item 2</ru-list-item>
      <ru-list-item>Item 3</ru-list-item>
    </ru-menu>
  </div>
`;
export const Styled = StyledTemplate.bind({});
