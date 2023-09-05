import { css } from 'lit';

export const styles = css`
  .ft-table-grid {
    height: var(--ft-table-height, calc(100vh - 250px));
  }
  .dt-share-download {
    display: flex;
    align-item: center;
    color: var(--ft-table-share-download-icon-color, inherit);
  }
  .dt-share-icon {
    margin-right: var(--ft-table-icon-right-margin, 20px);
  }
  .dt-download-icon,
  .dt-share-icon {
    cursor: pointer;
  }
  .dt-expansion-detail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: calc(100% - var(--ft-table-expansion-detail-width-shift, 60px));
  }
  .dt-expansion-detail p {
    margin: 5px 0;
  }
  .dt-expansion-action-warpper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dt-expansion-detail .dt-table-expansion-values {
    font-weight: var(--ft-table-expansion-values-font-weight, inherit);
  }
`;
