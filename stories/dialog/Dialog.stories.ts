import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/Dialog',
  decorators: [
    (story: any) => html` <style>
        ru-button {
          margin: 10px;
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

interface ArgTypes {
  open: boolean;
}

const clickHandler = (e: Event) => {
  if (e.target) {
    const el: any = e.target;
    const dialog = el.nextElementSibling;
    if (dialog) dialog.open = !dialog.open;
  }
};

const actionHandler = (e: Event) => {
  if (e.target) {
    const el: any = e.target;
    const dialog = el.closest('ru-dialog');
    if (dialog) dialog.hideActions = !dialog.hideActions;
  }
};

const Template: Story<ArgTypes> = () =>
  html`
    <main>
      <ru-button @click=${clickHandler} data-num="1" raised>Basic</ru-button>
      <ru-dialog id="dialog1" heading="Dialog header">
        Dialog body text
        <ru-button slot="primaryAction" dialogAction="ok">Action 2</ru-button>
        <ru-button slot="secondaryAction" dialogAction="cancel"
          >Action 1</ru-button
        >
      </ru-dialog>

      <ru-button @click=${clickHandler} data-num="2" raised>Actions</ru-button>
      <ru-dialog id="dialog2" heading="Actions">
        <p>
          By setting the dialogAction="my-action" attribute on any element
          projected into ru-dialog, you can close the dialog by clicking on that
          element. The dialog will then fire a non-bubbling "closing" event and
          a non-bubbling "closed" event with an event detail of {action:
          "my-action"}
        </p>
        <ru-button slot="primaryAction" dialogAction="customAction"
          >This has action</ru-button
        >
        <ru-button slot="secondaryAction">this does not</ru-button>
      </ru-dialog>

      <ru-button @click=${clickHandler} data-num="3" raised
        >Scrollable</ru-button
      >
      <ru-dialog id="dialog3" heading="My Title">
        <p>
          Really long text will scroll. Really long text will scroll. Really
          long text will scroll. Really long text will scroll. Really long text
          will scroll. Really long text will scroll. Really long text will
          scroll. Really long text will scroll. Really long text will scroll.
          Really long text will scroll. Really long text will scroll. Really
          long text will scroll. Really long text will scroll. Really long text
          will scroll. Really long text will scroll. Really long text will
          scroll. Really long text will scroll. Really long text will scroll.
          Really long text will scroll. Really long text will scroll. Really
          long text will scroll. Really long text will scroll. Really long text
          will scroll. Really long text will scroll. Really long text will
          scroll. Really long text will scroll. Really long text will scroll.
          Really long text will scroll. Really long text will scroll. Really
          long text will scroll. Really long text will scroll. Really log text
          will scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll. Really log
          text will scroll. Really log text will scroll. Really log text will
          scroll. Really log text will scroll. Really log text will scroll.
          Really log text will scroll. Really log text will scroll.
        </p>
        <ru-button slot="primaryAction" dialogAction="close"
          >Close this!</ru-button
        >
      </ru-dialog>

      <ru-button @click=${clickHandler} data-num="4" raised
        >Hide Actions</ru-button
      >
      <ru-dialog id="dialog4" heading="Hide Actions">
        <p>
          If you don't have actions, you may want to set the "hideActions"
          property. This property will remove extra whitespace at the bottom of
          this dialog. This button will toggle that whitespace:
        </p>
        <ru-button @click=${actionHandler} raised id="toggleActions"
          >Toggle hideActions</ru-button
        >
        <ru-button slot="primaryAction" dialogAction="close"
          >Close this!</ru-button
        >
      </ru-dialog>

      <style>
        .styled {
          --mdc-theme-surface: #fff;
          --mdc-dialog-scrim-color: rgba(35, 47, 52, 0.32);
          --mdc-dialog-heading-ink-color: #232f34;
          --mdc-dialog-content-ink-color: #232f34;
          --mdc-dialog-scroll-divider-color: transparent;
          --mdc-dialog-min-width: 500px;
          --mdc-dialog-max-width: 700px;
          --mdc-dialog-max-height: 350px;
          --mdc-dialog-shape-radius: 0px;

          /* color buttons */
          --mdc-theme-primary: #344955;
        }
      </style>

      <ru-button @click=${clickHandler} data-num="5" raised>Styled</ru-button>
      <ru-dialog id="dialog5" heading="Styled" class="styled">
        <div>These are the current styles applied to this dialog</div>
        <pre>
--mdc-theme-surface: #FFF;
--mdc-dialog-scrim-color: rgba(35, 47, 52, .32);
--mdc-dialog-heading-ink-color: #232F34;
--mdc-dialog-content-ink-color: #232F34;
--mdc-dialog-scroll-divider-color: transparent;
--mdc-dialog-min-width: 500px;
--mdc-dialog-max-width: 700px;
--mdc-dialog-max-height: 350px;
--mdc-dialog-shape-radius: 0px;

/* color buttons */
--mdc-theme-primary: #344955;
        </pre
        >
        <ru-button
          @click=${clickHandler}
          slot="primaryAction"
          dialogAction="close"
        >
          Too stylish for me!
        </ru-button>
      </ru-dialog>

      <ru-button @click=${clickHandler} data-num="6" raised>Stacked</ru-button>
      <ru-dialog id="dialog6" heading="Stacked" stacked>
        <div>
          This is what happens when you set the stacked property on ru-dialog.
          Notice that the primary action is now on top.
        </div>
        <ru-button slot="primaryAction" dialogAction="close">
          Primary
        </ru-button>
        <ru-button slot="secondaryAction" dialogAction="close">
          Secondary
        </ru-button>
      </ru-dialog>

      <ru-button @click=${clickHandler} data-num="7" raised
        >Initial Focus</ru-button
      >
      <ru-dialog id="dialog7" heading="Initial Focus">
        <div>
          In this example we set "dialogInitialFocus" on the ru-textfield. When
          this dialog opens, it is auto-focused.
        </div>
        <ru-textfield label="i am auto-focused" dialogInitialFocus>
        </ru-textfield>
        <ru-button slot="primaryAction" dialogAction="close">
          Primary
        </ru-button>
        <ru-button slot="secondaryAction" dialogAction="close">
          Secondary
        </ru-button>
      </ru-dialog>

      <ru-button @click=${clickHandler} data-num="8" raised
        >Form Validation</ru-button
      >
      <ru-dialog id="dialog8" heading="Form Validation">
        <p>This dialog can validate user input before closing.</p>
        <ru-textfield
          id="dialog8-text-field"
          minlength="3"
          maxlength="64"
          placeholder="First name"
          required
        >
        </ru-textfield>
        <ru-button
          @click=${clickHandler}
          id="dialog8-primary-action-button"
          slot="primaryAction"
        >
          Confirm
        </ru-button>
        <ru-button slot="secondaryAction" dialogAction="close">
          Cancel
        </ru-button>
      </ru-dialog>
    </main>
  `;

const AlertTemplate: Story<ArgTypes> = ({ open }: ArgTypes) => html` <ru-dialog
  ?open=${open}
>
  <div>Discard draft?</div>
  <ru-button slot="primaryAction" dialogAction="discard"> Discard </ru-button>
  <ru-button slot="secondaryAction" dialogAction="cancel"> Cancel </ru-button>
</ru-dialog>`;

export const Alert = AlertTemplate.bind({});
Alert.args = {
  open: true,
};

const ConfirmationTemplate: Story<ArgTypes> = ({
  open,
}: ArgTypes) => html` <style>
    ru-dialog div {
      flex-direction: column;
    }
    ru-dialog div,
    ru-radio {
      display: flex;
    }
  </style>

  <ru-dialog heading="Phone Ringtone" ?open=${open}>
    <div>
      <ru-formfield label="Never Gonna Give You Up">
        <ru-radio id="a1" name="a" checked></ru-radio>
      </ru-formfield>
      <ru-formfield label="Hot Cross Buns">
        <ru-radio name="a"></ru-radio>
      </ru-formfield>
      <ru-formfield label="None">
        <ru-radio name="a"></ru-radio>
      </ru-formfield>
    </div>
    <ru-button dialogAction="ok" slot="primaryAction"> ok </ru-button>
    <ru-button dialogAction="cancel" slot="secondaryAction"> cancel </ru-button>
  </ru-dialog>`;

export const Confirmation = ConfirmationTemplate.bind({});
Confirmation.args = {
  open: true,
};

const StyledTemplate: Story<ArgTypes> = ({ open }: ArgTypes) => html` <style>
    .styled {
      --mdc-shape-medium: 0px;

      /* color buttons */
      --mdc-theme-primary: #344955;
    }
  </style>

  <ru-dialog heading="Styled" class="styled" ?open=${open}>
    <div>
      In this dialog we have changed the button color and removed the border
      radius.
    </div>
    <ru-button slot="primaryAction" dialogAction="close">
      This button is bluish!
    </ru-button>
  </ru-dialog>`;

export const Styled = StyledTemplate.bind({});
Styled.args = {
  open: true,
};

const PreventScrimClicksTemplate: Story<ArgTypes> = ({
  open,
}: ArgTypes) => html` <ru-dialog scrimClickAction="" ?open=${open}>
  <div>
    This will prevent a click outside of the dialog from closing the dialog.
  </div>
  <ru-button slot="primaryAction" dialogAction="close"> Discard </ru-button>
  <ru-button slot="secondaryAction" dialogAction="close"> Cancel </ru-button>
</ru-dialog>`;

export const PreventScrimClicks = PreventScrimClicksTemplate.bind({});
PreventScrimClicks.args = {
  open: true,
};

export const Dialog = Template.bind({});
