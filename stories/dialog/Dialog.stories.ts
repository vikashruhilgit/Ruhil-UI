import { html, TemplateResult } from 'lit-html';
import '../../src/ruhil-ui';

export default {
  title: 'Ruhil UI/Component/Dialog',
  decorators: [
    (story: any) => html` <style>
        ft-button {
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
    const dialog = el.closest('ft-dialog');
    if (dialog) dialog.hideActions = !dialog.hideActions;
  }
};

const Template: Story<ArgTypes> = () =>
  html`
    <main>
      <ft-button @click=${clickHandler} data-num="1" raised>Basic</ft-button>
      <ft-dialog id="dialog1" heading="Dialog header">
        Dialog body text
        <ft-button slot="primaryAction" dialogAction="ok">Action 2</ft-button>
        <ft-button slot="secondaryAction" dialogAction="cancel"
          >Action 1</ft-button
        >
      </ft-dialog>

      <ft-button @click=${clickHandler} data-num="2" raised>Actions</ft-button>
      <ft-dialog id="dialog2" heading="Actions">
        <p>
          By setting the dialogAction="my-action" attribute on any element
          projected into ft-dialog, you can close the dialog by clicking on that
          element. The dialog will then fire a non-bubbling "closing" event and
          a non-bubbling "closed" event with an event detail of {action:
          "my-action"}
        </p>
        <ft-button slot="primaryAction" dialogAction="customAction"
          >This has action</ft-button
        >
        <ft-button slot="secondaryAction">this does not</ft-button>
      </ft-dialog>

      <ft-button @click=${clickHandler} data-num="3" raised
        >Scrollable</ft-button
      >
      <ft-dialog id="dialog3" heading="My Title">
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
        <ft-button slot="primaryAction" dialogAction="close"
          >Close this!</ft-button
        >
      </ft-dialog>

      <ft-button @click=${clickHandler} data-num="4" raised
        >Hide Actions</ft-button
      >
      <ft-dialog id="dialog4" heading="Hide Actions">
        <p>
          If you don't have actions, you may want to set the "hideActions"
          property. This property will remove extra whitespace at the bottom of
          this dialog. This button will toggle that whitespace:
        </p>
        <ft-button @click=${actionHandler} raised id="toggleActions"
          >Toggle hideActions</ft-button
        >
        <ft-button slot="primaryAction" dialogAction="close"
          >Close this!</ft-button
        >
      </ft-dialog>

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

      <ft-button @click=${clickHandler} data-num="5" raised>Styled</ft-button>
      <ft-dialog id="dialog5" heading="Styled" class="styled">
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
        <ft-button
          @click=${clickHandler}
          slot="primaryAction"
          dialogAction="close"
        >
          Too stylish for me!
        </ft-button>
      </ft-dialog>

      <ft-button @click=${clickHandler} data-num="6" raised>Stacked</ft-button>
      <ft-dialog id="dialog6" heading="Stacked" stacked>
        <div>
          This is what happens when you set the stacked property on ft-dialog.
          Notice that the primary action is now on top.
        </div>
        <ft-button slot="primaryAction" dialogAction="close">
          Primary
        </ft-button>
        <ft-button slot="secondaryAction" dialogAction="close">
          Secondary
        </ft-button>
      </ft-dialog>

      <ft-button @click=${clickHandler} data-num="7" raised
        >Initial Focus</ft-button
      >
      <ft-dialog id="dialog7" heading="Initial Focus">
        <div>
          In this example we set "dialogInitialFocus" on the ft-textfield. When
          this dialog opens, it is auto-focused.
        </div>
        <ft-textfield label="i am auto-focused" dialogInitialFocus>
        </ft-textfield>
        <ft-button slot="primaryAction" dialogAction="close">
          Primary
        </ft-button>
        <ft-button slot="secondaryAction" dialogAction="close">
          Secondary
        </ft-button>
      </ft-dialog>

      <ft-button @click=${clickHandler} data-num="8" raised
        >Form Validation</ft-button
      >
      <ft-dialog id="dialog8" heading="Form Validation">
        <p>This dialog can validate user input before closing.</p>
        <ft-textfield
          id="dialog8-text-field"
          minlength="3"
          maxlength="64"
          placeholder="First name"
          required
        >
        </ft-textfield>
        <ft-button
          @click=${clickHandler}
          id="dialog8-primary-action-button"
          slot="primaryAction"
        >
          Confirm
        </ft-button>
        <ft-button slot="secondaryAction" dialogAction="close">
          Cancel
        </ft-button>
      </ft-dialog>
    </main>
  `;

const AlertTemplate: Story<ArgTypes> = ({ open }: ArgTypes) => html` <ft-dialog
  ?open=${open}
>
  <div>Discard draft?</div>
  <ft-button slot="primaryAction" dialogAction="discard"> Discard </ft-button>
  <ft-button slot="secondaryAction" dialogAction="cancel"> Cancel </ft-button>
</ft-dialog>`;

export const Alert = AlertTemplate.bind({});
Alert.args = {
  open: true,
};

const ConfirmationTemplate: Story<ArgTypes> = ({
  open,
}: ArgTypes) => html` <style>
    ft-dialog div {
      flex-direction: column;
    }
    ft-dialog div,
    ft-radio {
      display: flex;
    }
  </style>

  <ft-dialog heading="Phone Ringtone" ?open=${open}>
    <div>
      <ft-formfield label="Never Gonna Give You Up">
        <ft-radio id="a1" name="a" checked></ft-radio>
      </ft-formfield>
      <ft-formfield label="Hot Cross Buns">
        <ft-radio name="a"></ft-radio>
      </ft-formfield>
      <ft-formfield label="None">
        <ft-radio name="a"></ft-radio>
      </ft-formfield>
    </div>
    <ft-button dialogAction="ok" slot="primaryAction"> ok </ft-button>
    <ft-button dialogAction="cancel" slot="secondaryAction"> cancel </ft-button>
  </ft-dialog>`;

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

  <ft-dialog heading="Styled" class="styled" ?open=${open}>
    <div>
      In this dialog we have changed the button color and removed the border
      radius.
    </div>
    <ft-button slot="primaryAction" dialogAction="close">
      This button is bluish!
    </ft-button>
  </ft-dialog>`;

export const Styled = StyledTemplate.bind({});
Styled.args = {
  open: true,
};

const PreventScrimClicksTemplate: Story<ArgTypes> = ({
  open,
}: ArgTypes) => html` <ft-dialog scrimClickAction="" ?open=${open}>
  <div>
    This will prevent a click outside of the dialog from closing the dialog.
  </div>
  <ft-button slot="primaryAction" dialogAction="close"> Discard </ft-button>
  <ft-button slot="secondaryAction" dialogAction="close"> Cancel </ft-button>
</ft-dialog>`;

export const PreventScrimClicks = PreventScrimClicksTemplate.bind({});
PreventScrimClicks.args = {
  open: true,
};

export const Dialog = Template.bind({});
