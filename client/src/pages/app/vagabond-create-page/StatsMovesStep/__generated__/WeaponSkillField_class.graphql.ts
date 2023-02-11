/**
 * @generated SignedSource<<f0af0d61b5ab4790991fcf2d7e272708>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WeaponSkillField_class$data = {
  readonly weaponSkillConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      };
    } | null>;
  };
  readonly " $fragmentType": "WeaponSkillField_class";
};
export type WeaponSkillField_class$key = {
  readonly " $data"?: WeaponSkillField_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"WeaponSkillField_class">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WeaponSkillField_class",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 50
        }
      ],
      "concreteType": "VagabondClassWeaponSkillConnection",
      "kind": "LinkedField",
      "name": "weaponSkillConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "VagabondClassWeaponSkillConnectionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "WeaponSkill",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
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
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "weaponSkillConnection(first:50)"
    }
  ],
  "type": "VagabondClass",
  "abstractKey": null
};

(node as any).hash = "635ac446a2ec289c82a5fd3f7afb7b2d";

export default node;
