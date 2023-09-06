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
    <ft-button
      @click=${clickHandler}
      id="basicButton"
      raised
      label="Open Basic Menu"
    ></ft-button>
    <ft-menu id="basicMenu">
      <ft-list-item>one</ft-list-item>
      <ft-list-item>two</ft-list-item>
      <ft-list-item>three</ft-list-item>
      <ft-list-item disabled><div>four</div></ft-list-item>
      <li divider></li>
      <ft-list-item>aaa</ft-list-item>
      <ft-list-item>bbb</ft-list-item>
    </ft-menu>
  </div>

  <div style="position:relative;">
    <ft-button
      @click=${clickHandler}
      id="cornerButton"
      raised
      label="Open Menu With Corner"
    >
    </ft-button>
    <ft-menu .corner=${'TOP_END'} id="cornerMenu">
      <ft-list-item>one</ft-list-item>
      <ft-list-item>two</ft-list-item>
      <ft-list-item>three</ft-list-item>
      <ft-list-item disabled><div>four</div></ft-list-item>
      <li divider></li>
      <ft-list-item>aaa</ft-list-item>
      <ft-list-item>bbb</ft-list-item>
    </ft-menu>

    <ft-select
      @change=${changeHandler}
      outlined
      id="cornerSelect"
      label="Menu Corner"
    >
      <ft-list-item selected></ft-list-item>
      <ft-list-item value="TOP_LEFT">TOP_LEFT</ft-list-item>
      <ft-list-item value="TOP_RIGHT">TOP_RIGHT</ft-list-item>
      <ft-list-item value="BOTTOM_LEFT">BOTTOM_LEFT</ft-list-item>
      <ft-list-item value="BOTTOM_RIGHT">BOTTOM_RIGHT</ft-list-item>
      <ft-list-item value="TOP_START">TOP_START</ft-list-item>
      <ft-list-item value="TOP_END">TOP_END</ft-list-item>
      <ft-list-item value="BOTTOM_START">BOTTOM_START</ft-list-item>
      <ft-list-item value="BOTTOM_END">BOTTOM_END</ft-list-item>
    </ft-select>
  </div>

  <div style="position:relative;">
    <ft-button
      @click=${clickHandler}
      id="quickButton"
      raised
      label="Open Quick Menu"
    ></ft-button>
    <ft-menu quick id="quickMenu">
      <ft-list-item>one</ft-list-item>
      <ft-list-item>two</ft-list-item>
      <ft-list-item>three</ft-list-item>
      <ft-list-item disabled><div>four</div></ft-list-item>
      <li divider></li>
      <ft-list-item>aaa</ft-list-item>
      <ft-list-item>bbb</ft-list-item>
    </ft-menu>
  </div>

  <div class="scrollable">
    <span>
      <ft-button
        @click=${clickHandler}
        id="fixedButton"
        raised
        label="Open Fixed Menu"
      ></ft-button>
      <ft-menu fixed id="fixedMenu">
        <ft-list-item>one</ft-list-item>
        <ft-list-item>two</ft-list-item>
        <ft-list-item>three</ft-list-item>
        <ft-list-item disabled><div>four</div></ft-list-item>
        <li divider></li>
        <ft-list-item>aaa</ft-list-item>
        <ft-list-item>bbb</ft-list-item>
      </ft-menu>
    </span>

    <span style="position:relative;">
      <ft-button
        @click=${clickHandler}
        id="nonfixedButton"
        raised
        label="Open Non-Fixed Menu"
      ></ft-button>
      <ft-menu id="nonfixedMenu">
        <ft-list-item>one</ft-list-item>
        <ft-list-item>two</ft-list-item>
        <ft-list-item>three</ft-list-item>
        <ft-list-item disabled><div>four</div></ft-list-item>
        <li divider></li>
        <ft-list-item>aaa</ft-list-item>
        <ft-list-item>bbb</ft-list-item>
      </ft-menu>
    </span>
    <div>Open each menu and then scroll this div</div>
    <div class="spacer"></div>
  </div>

  <div>
    <ft-button
      @click=${clickHandler}
      id="absoluteButton"
      raised
      label="Open Absolute Menu (no anchor)"
    ></ft-button>
    <ft-menu absolute x="0" y="0" id="absoluteMenu">
      <ft-list-item>one</ft-list-item>
      <ft-list-item>two</ft-list-item>
      <ft-list-item>three</ft-list-item>
      <ft-list-item disabled><div>four</div></ft-list-item>
      <li divider></li>
      <ft-list-item>aaa</ft-list-item>
      <ft-list-item>bbb</ft-list-item>
    </ft-menu>

    <ft-textfield type="number" label="x" outlined id="absoluteX" value="0">
    </ft-textfield>
    <ft-textfield type="number" label="y" outlined id="absoluteY" value="0">
    </ft-textfield>
  </div>

  <div style="position:relative;">
    <ft-button
      @click=${clickHandler}
      id="activatableButton"
      raised
      label="Open Activatable Menu"
    ></ft-button>
    <ft-menu activatable id="activatableMenu">
      <ft-list-item>one</ft-list-item>
      <ft-list-item>two</ft-list-item>
      <ft-list-item>three</ft-list-item>
      <ft-list-item disabled><div>four</div></ft-list-item>
      <li divider></li>
      <ft-list-item>aaa</ft-list-item>
      <ft-list-item>bbb</ft-list-item>
    </ft-menu>
  </div>

  <div style="position:relative;">
    <ft-button
      @click=${clickHandler}
      id="multiButton"
      raised
      label="Open Multi (activatable) Menu"
    ></ft-button>
    <ft-menu multi activatable id="multiMenu">
      <ft-list-item selected activated>one</ft-list-item>
      <ft-list-item>two</ft-list-item>
      <ft-list-item selected activated>three</ft-list-item>
      <ft-list-item disabled><div>four</div></ft-list-item>
      <li divider></li>
      <ft-list-item>aaa</ft-list-item>
      <ft-list-item>bbb</ft-list-item>
    </ft-menu>
  </div>

  <div style="position:relative;">
    <style>
      #groupedMenu ft-list-item:not([selected]) ft-icon {
        display: none;
      }
    </style>

    <ft-button
      @click=${clickHandler}
      id="groupedButton"
      raised
      label="Open Grouped Menu"
    ></ft-button>
    <ft-menu multi id="groupedMenu">
      <ft-list-item selected group="a" graphic="icon">
        <ft-icon slot="graphic">check</ft-icon>
        <span>a-one</span>
      </ft-list-item>
      <ft-list-item group="a" graphic="icon">
        <ft-icon slot="graphic">check</ft-icon>
        <span>a-two</span>
      </ft-list-item>
      <ft-list-item group="a" graphic="icon">
        <ft-icon slot="graphic">check</ft-icon>
        <span>a-three</span>
      </ft-list-item>
      <li divider></li>
      <ft-list-item selected group="b" graphic="icon">
        <ft-icon slot="graphic">check</ft-icon>
        <span>b-one</span>
      </ft-list-item>
      <ft-list-item group="b" graphic="icon">
        <ft-icon slot="graphic">check</ft-icon>
        <span>b-two</span>
      </ft-list-item>
    </ft-menu>
  </div>

  <div style="position:relative;">
    <ft-button
      @click=${clickHandler}
      id="dfsButton"
      raised
      label="Open Menu With Default Focus"
    >
    </ft-button>
    <ft-menu id="dfsMenu">
      <ft-list-item>one</ft-list-item>
      <ft-list-item>two</ft-list-item>
      <ft-list-item>three</ft-list-item>
      <ft-list-item disabled><div>four</div></ft-list-item>
      <li divider></li>
      <ft-list-item>aaa</ft-list-item>
      <ft-list-item>bbb</ft-list-item>
    </ft-menu>

    <ft-select outlined id="dfsSelect" label="Menu Default Focus">
      <ft-list-item value="NONE">NONE</ft-list-item>
      <ft-list-item value="LIST_ROOT" selected>LIST_ROOT</ft-list-item>
      <ft-list-item value="FIRST_ITEM">FIRST_ITEM</ft-list-item>
      <ft-list-item value="LAST_ITEM">LAST_ITEM</ft-list-item>
    </ft-select>
  </div>

  <div>
    <h3>Absolute w/ anchor</h3>
    <div>This is reusing the same menu and changing the anchor</div>
    <ft-button
      @click=${clickHandler}
      id="absoluteLeftButton"
      raised
      label="anchor = this"
    >
    </ft-button>
    <ft-menu absolute id="absoluteAnchorMenu">
      <ft-list-item>one</ft-list-item>
      <ft-list-item>two</ft-list-item>
      <ft-list-item>three</ft-list-item>
      <ft-list-item disabled><div>four</div></ft-list-item>
      <li divider></li>
      <ft-list-item>aaa</ft-list-item>
      <ft-list-item>bbb</ft-list-item>
    </ft-menu>
  </div>
</main>`;

export const ALL = Template.bind({});

const BasicTemplate: Story<ArgTypes> = () => html`
  <div style="position: relative;">
    <ft-button
      @click=${clickHandler}
      id="button"
      raised
      label="Open Menu"
    ></ft-button>
    <ft-menu id="menu">
      <ft-list-item>Item 0</ft-list-item>
      <ft-list-item>Item 1</ft-list-item>
      <ft-list-item>Item 2</ft-list-item>
      <ft-list-item>Item 3</ft-list-item>
    </ft-menu>
  </div>
`;
export const Basic = BasicTemplate.bind({});

const ActivatableTemplate: Story<ArgTypes> = () => html`
  <div style="position: relative;">
    <ft-button
      @click=${clickHandler}
      id="button"
      raised
      label="Open Menu"
    ></ft-button>
    <ft-menu activatable id="menu">
      <ft-list-item>Item 0</ft-list-item>
      <ft-list-item selected activated>Item 1</ft-list-item>
      <ft-list-item>Item 2</ft-list-item>
      <ft-list-item>Item 3</ft-list-item>
    </ft-menu>
  </div>
`;
export const Activatable = ActivatableTemplate.bind({});

const MultiSelectableActivatableTemplate: Story<ArgTypes> = () => html`
  <div style="position: relative;">
    <ft-button
      @click=${clickHandler}
      id="button"
      raised
      label="Open Menu"
    ></ft-button>
    <ft-menu activatable multi id="menu">
      <ft-list-item>Item 0</ft-list-item>
      <ft-list-item selected activated>Item 1</ft-list-item>
      <ft-list-item>Item 2</ft-list-item>
      <ft-list-item selected activated>Item 3</ft-list-item>
    </ft-menu>
  </div>
`;
export const MultiSelectableActivatable =
  MultiSelectableActivatableTemplate.bind({});

const AbsoluteTemplate: Story<ArgTypes> = () => html`
  <div style="position: relative;">
    <ft-button
      @click=${clickHandler}
      id="button"
      raised
      label="Open Menu"
    ></ft-button>
    <ft-menu absolute x="50" y="100" id="menu">
      <ft-list-item>Item 0</ft-list-item>
      <ft-list-item>Item 1</ft-list-item>
      <ft-list-item>Item 2</ft-list-item>
      <ft-list-item>Item 3</ft-list-item>
    </ft-menu>
  </div>
`;
export const Absolute = AbsoluteTemplate.bind({});

const FixedTemplate: Story<ArgTypes> = () => html`
  <div style="position: relative;">
    <ft-button
      @click=${clickHandler}
      id="button"
      raised
      label="Open Menu"
    ></ft-button>
    <ft-menu fixed id="menu">
      <ft-list-item>Item 0</ft-list-item>
      <ft-list-item>Item 1</ft-list-item>
      <ft-list-item>Item 2</ft-list-item>
      <ft-list-item>Item 3</ft-list-item>
    </ft-menu>
  </div>
`;
export const Fixed = FixedTemplate.bind({});

const SelectionGroupsTemplate: Story<ArgTypes> = () => html`
  <style>
    /* Hide the icon of unselected menu items that are in a group */
    #menu2 > [ft-list-item][group]:not([selected]) [slot='graphic'] {
      display: none;
    }
  </style>
  <div style="position:relative;">
    <ft-button
      @click=${clickHandler}
      id="button"
      raised
      label="Open Menu"
    ></ft-button>

    <ft-menu multi id="menu2">
      <ft-list-item group="a" graphic="icon">
        <ft-icon slot="graphic">check</ft-icon>
        <span>Item 0</span>
      </ft-list-item>
      <ft-list-item group="a" graphic="icon" selected>
        <ft-icon slot="graphic">check</ft-icon>
        <span>Item 1</span>
      </ft-list-item>
      <ft-list-item group="a" graphic="icon">
        <ft-icon slot="graphic">check</ft-icon>
        <span>Item 2</span>
      </ft-list-item>
      <li divider role="separator"></li>
      <ft-list-item group="b" graphic="icon" selected>
        <ft-icon slot="graphic">check</ft-icon>
        <span>Item 3</span>
      </ft-list-item>
      <ft-list-item group="b" graphic="icon">
        <ft-icon slot="graphic">check</ft-icon>
        <span>Item 4</span>
      </ft-list-item>
    </ft-menu>
  </div>
`;
export const SelectionGroups = SelectionGroupsTemplate.bind({});

const StyledTemplate: Story<ArgTypes> = () => html`
  <style>
    #menu1 {
      --mdc-menu-min-width: 200px;
      --mdc-menu-item-height: 30px;
      --mdc-theme-surface: aliceblue;

      /* inherits the styles of ft-list internally */
      --mdc-theme-primary: blue;
      --mdc-list-vertical-padding: 0px;
      --mdc-list-side-padding: 30px;
    }
  </style>
  <div style="position: relative;">
    <ft-button
      @click=${clickHandler}
      id="button"
      raised
      label="Open Menu"
    ></ft-button>
    <ft-menu activatable multi id="menu1">
      <ft-list-item selected activated>Item 0</ft-list-item>
      <ft-list-item selected activated>Item 1</ft-list-item>
      <ft-list-item>Item 2</ft-list-item>
      <ft-list-item>Item 3</ft-list-item>
    </ft-menu>
  </div>
`;
export const Styled = StyledTemplate.bind({});
