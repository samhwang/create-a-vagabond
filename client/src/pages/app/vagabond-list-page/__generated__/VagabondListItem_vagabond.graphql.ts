/**
 * @generated SignedSource<<c53c98af14613ea6751c321b95fcd41c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VagabondListItem_vagabond$data = {
  readonly availablePoints: number;
  readonly charm: number;
  readonly cunning: number;
  readonly finesse: number;
  readonly id: string;
  readonly luck: number;
  readonly might: number;
  readonly name: string;
  readonly " $fragmentType": "VagabondListItem_vagabond";
};
export type VagabondListItem_vagabond$key = {
  readonly " $data"?: VagabondListItem_vagabond$data;
  readonly " $fragmentSpreads": FragmentRefs<"VagabondListItem_vagabond">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VagabondListItem_vagabond",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "availablePoints",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "charm",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cunning",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "finesse",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "luck",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "might",
      "storageKey": null
    }
  ],
  "type": "Vagabond",
  "abstractKey": null
};

(node as any).hash = "d7fba1fbcaad2d46bdc2c0ccd40fc5b2";

export default node;
