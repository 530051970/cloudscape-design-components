// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styles from './styles.css.js';

type ScreenreaderOnlyProps = Exclude<React.HTMLAttributes<HTMLDivElement>, 'className'>;

/**
 * Makes content now shown on a screen but still announced by screen-reader users.
 * The component is suitable when the aria-label cannot be used, e.g. to avoid elemnts being announced as "blank".
 *
 * To exclude screenreader-only content use `:not(.${screenreaderOnlyStyles.root})` selector, for example:
 *
 * ```
 * import screenreaderOnlyStyles from '~internal/components/screenreader-only/styles.css.js'
 *
 * let visibleContent = wrapper.find(`${styles.label}`).find(`:not(.${screenreaderOnlyStyles.root})`).getElement().textContent
 *
 * let screenreaderContent = wrapper.find(`${styles.label}`).find(`.${screenreaderOnlyStyles.root}`).getElement().textContent
 * ```
 */
export default function ScreenreaderOnly(props: ScreenreaderOnlyProps) {
  return <div {...props} className={styles.root} />;
}
