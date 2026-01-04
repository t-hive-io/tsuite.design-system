# Icons (Figma: Icons frame)

This document is generated from the Figma Components API and kept as a single place to debug icon naming.

Total components in Icons frame: 649
Total component sets found inside Icons: 153

## Why you see `Property 1=...`

- Many entries in Icons are variants in a COMPONENT_SET. The API `name` becomes the variant label (e.g. `Property 1=Rotate`).
- The _icon family name_ is usually the component set name (e.g. `Mini icons`), and the variant label is the state/value (e.g. `Rotate`).

## Proposed Storybook folder structure

Goal: make it easy for developers to browse and find things, while keeping icon debugging and naming rules in one place.

### Recommended Storybook left-nav taxonomy

- **Getting Started**
  - Overview
  - Installation
  - Changelog / Releases
- **Foundations**
  - Design Tokens
    - Color
    - Typography
    - Spacing
    - Radius
    - Shadow
    - Motion
  - Icons
    - Overview (naming rules + states)
    - Guidelines (when to use which state)
    - Library (optional; only if we have a reliable searchable view)
- **Components**
  - Inputs
  - Navigation
  - Feedback
  - Data Display
- **Patterns**
  - Forms
  - Empty States

### Recommended repo filesystem layout

- Keep component stories close to the component implementation:
  - `src/components/<Component>/<Component>.stories.tsx`
- Keep cross-cutting docs (Foundations, icons, tokens) in a docs/stories area:
  - `src/stories/foundations/*` (tokens + icons docs)
  - `src/stories/getting-started/*`

### Icons-specific naming rule (from this doc)

- Treat the **Component Set name** as the icon’s primary name (e.g. `logout`, `local_parking`).
- Treat the variant/property label (`Property 1=Default|Focused|Hovred|Disable`) as the icon **state**.

## Component sets inside Icons

| Component set                    | Set Node ID | Variant count | Example API names                                                                                                                                                     |
| -------------------------------- | ----------- | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vehicle models large             | 2453:1750   |             8 | Property 1=Charm, Property 1=CDI, Property 1=CB18, Property 1=Raymond, Property 1=SAE160_1200                                                                         |
| Load carrier types large         | 2453:1535   |             7 | Property 1=WP, Property 1=WP_ASIA, Property 1=P1208B, Property 1=EPAL_1, Property 1=EPAL_CHARM                                                                        |
| Gap and margin                   | 5311:73039  |             6 | Property 1=Rotate dimension, Property 1=Horizontal gap between vehicles, Property 1=Vertical gap between vehicles, Property 1=TEXT ICON, Property 1=Margin top bottom |
| heat                             | 5386:27102  |             5 | Property 1=Hovred, Property 1=Pressed, Property 1=Disable, Property 1=Default, Property 1=Focused                                                                     |
| location_on                      | 4971:38657  |             5 | Property 1=Default, Property 1=Hovred, Property 1=Disable, Property 1=Focused, Property 1=Pressed                                                                     |
| nearby                           | 5374:225    |             5 | Property 1=Hovred, Property 1=Focused, Property 1=Default, Property 1=Pressed, Property 1=Disable                                                                     |
| 361                              | 3838:102075 |             4 | Property 1=Hovred, Property 1=Focused, Property 1=Disable, Property 1=Enabled                                                                                         |
| 3D icon                          | 3838:103152 |             4 | Property 1=Enabled, Property 1=Focused, Property 1=Disable, Property 1=Hovred                                                                                         |
| 3d_rotation                      | 3838:102047 |             4 | Property 1=Enabled, Property 1=Focused, Property 1=Disable, Property 1=Hovred                                                                                         |
| add                              | 3838:100738 |             4 | Property 1=Disable, Property 1=Enabled, Property 1=Focused, Property 1=Hovered                                                                                        |
| ads_click                        | 3838:102458 |             4 | Property 1=Enabled, Property 1=Focused, Property 1=Disable, Property 1=Hovred                                                                                         |
| align_horizontal_center          | 3838:102409 |             4 | Property 1=Disable, Property 1=Hovred, Property 1=Focused, Property 1=Enabled                                                                                         |
| align_horizontal_left            | 3838:102404 |             4 | Property 1=Disable, Property 1=Hovred, Property 1=Focused, Property 1=Enabled                                                                                         |
| align_horizontal_right           | 3838:102414 |             4 | Property 1=Hovred, Property 1=Focused, Property 1=Disable, Property 1=Enabled                                                                                         |
| align_vertical_bottom            | 3838:102433 |             4 | Property 1=Enabled, Property 1=Hovred, Property 1=Disable, Property 1=Focused                                                                                         |
| align_vertical_bottom            | 3838:102032 |             4 | Property 1=Hovred, Property 1=Focused, Property 1=Enabled, Property 1=Disable                                                                                         |
| align_vertical_center            | 3838:102424 |             4 | Property 1=Focused, Property 1=Enabled, Property 1=Disable, Property 1=Hovred                                                                                         |
| align_vertical_center            | 3838:101995 |             4 | Property 1=Disable, Property 1=Hovred, Property 1=Focused, Property 1=Enabled                                                                                         |
| align_vertical_top               | 3838:102008 |             4 | Property 1=Enabled, Property 1=Disable, Property 1=Hovred, Property 1=Focused                                                                                         |
| align_vertical_top               | 3838:102419 |             4 | Property 1=Enabled, Property 1=Disable, Property 1=Hovred, Property 1=Focused                                                                                         |
| arrow_drop_down                  | 3838:101987 |             4 | Property 1=Hovred, Property 1=Disable, Property 1=Focused, Property 1=Enabled                                                                                         |
| arrow_drop_down_customized       | 3838:102759 |             4 | Property 1=Hovred, Property 1=Disable, Property 1=Focused, Property 1=Enabled                                                                                         |
| arrow_drop_up                    | 3838:102194 |             4 | Property 1=Enabled, Property 1=Disable, Property 1=Focused, Property 1=Hovred                                                                                         |
| attach_file                      | 3838:102346 |             4 | Property 1=Disable, Property 1=Focused, Property 1=Enabled, Property 1=Hovred                                                                                         |
| autorenew                        | 3838:102448 |             4 | Property 1=Disable, Property 1=Hovred, Property 1=Enabled, Property 1=Focused                                                                                         |
| back_hand                        | 3838:100655 |             4 | Property 1=Focused, Property 1=Hovered, Property 1=Disable, Property 1=Enabled                                                                                        |
| balance                          | 3838:102394 |             4 | Property 1=Hovred, Property 1=Disable, Property 1=Focused, Property 1=Enabled                                                                                         |
| block                            | 3838:102241 |             4 | Property 1=Hovred, Property 1=Enabled, Property 1=Focused, Property 1=Disable                                                                                         |
| bolt                             | 3797:54262  |             4 | Property 1=Disable, Property 1=Hovred, Property 1=Enabled, Property 1=Focused                                                                                         |
| bookmark                         | 4102:34250  |             4 | Property 1=Hovred, Property 1=Enabled, Property 1=Disable, Property 1=Focused                                                                                         |
| calendar_add_on                  | 3838:102226 |             4 | Property 1=Focused, Property 1=Enabled, Property 1=Disable, Property 1=Hovred                                                                                         |
| cancel                           | 3797:54257  |             4 | Property 1=Disable, Property 1=Focused, Property 1=Enabled, Property 1=Hovred                                                                                         |
| center_focus_weak                | 4181:36469  |             4 | Property 1=Hovred, Property 1=Focused, Property 1=Disable, Property 1=Default                                                                                         |
| check                            | 3838:102147 |             4 | Property 1=Hovred, Property 1=Focused, Property 1=Enabled, Property 1=Disable                                                                                         |
| check_box_FILL_w                 | 3838:102318 |             4 | Property 1=Enabled, Property 1=Disable, Property 1=Focused, Property 1=Hovred                                                                                         |
| check_box_outline                | 3838:102291 |             4 | Property 1=Hovred, Property 1=Focused, Property 1=Disable, Property 1=Enabled                                                                                         |
| check_circle                     | 3797:54251  |             4 | Property 1=Focused, Property 1=Hovered, Property 1=Enabled, Property 1=Disable                                                                                        |
| check_small                      | 3838:102488 |             4 | Property 1=Hovred, Property 1=Enabled, Property 1=Disable, Property 1=Focused                                                                                         |
| chevron_left                     | 3838:102286 |             4 | Property 1=Focused, Property 1=Enabled, Property 1=Hovred, Property 1=Disable                                                                                         |
| chevron_right                    | 3838:102281 |             4 | Property 1=Hovred, Property 1=Focused, Property 1=Enabled, Property 1=Disable                                                                                         |
| circle                           | 3838:102463 |             4 | Property 1=Hovred, Property 1=Disable, Property 1=Enabled, Property 1=Focused                                                                                         |
| close                            | 3838:102140 |             4 | Property 1=Hovred, Property 1=Disable, Property 1=Focused, Property 1=Enabled                                                                                         |
| construction                     | 4228:36170  |             4 | Property 1=Default, Property 1=Disable, Property 1=Hovred, Property 1=Focused                                                                                         |
| contrast                         | 4247:36170  |             4 | Property 1=Focused, Property 1=Default, Property 1=Hovred, Property 1=Disable                                                                                         |
| conveyor_belt                    | 3838:101673 |             4 | Property 1=Focused, Property 1=Hovred, Property 1=Disable, Property 1=Enabled                                                                                         |
| crop                             | 3838:102498 |             4 | Property 1=Enabled, Property 1=Disable, Property 1=Focused, Property 1=Hovred                                                                                         |
| crop_square                      | 3838:102062 |             4 | Property 1=Enabled, Property 1=Disable, Property 1=Hovred, Property 1=Focused                                                                                         |
| crossword                        | 4334:39009  |             4 | Property 1=Default, Property 1=Focused, Property 1=Hovred, Property 1=Disable                                                                                         |
| dashboard                        | 3838:102389 |             4 | Property 1=Enabled, Property 1=Hovred, Property 1=Focused, Property 1=Disable                                                                                         |
| delete                           | 3838:102124 |             4 | Property 1=Hovred, Property 1=Disable, Property 1=Enabled, Property 1=Focused                                                                                         |
| deployed                         | 3838:102453 |             4 | Property 1=Enabled, Property 1=Hovred, Property 1=Disable, Property 1=Focused                                                                                         |
| do_not_disturb_on                | 4259:36181  |             4 | Property 1=Hovred, Property 1=Disable, Property 1=Default, Property 1=Focused                                                                                         |
| download                         | 3838:102135 |             4 | Property 1=Enabled, Property 1=Hovred, Property 1=Disable, Property 1=Focused                                                                                         |
| Duplicate                        | 3838:103086 |             4 | Property 1=Hovred, Property 1=Enabled, Property 1=Disable, Property 1=Focused                                                                                         |
| Duplicate 2                      | 3838:103108 |             4 | Property 1=Focused, Property 1=Disable, Property 1=Hovred, Property 1=Enabled                                                                                         |
| edit                             | 3838:102261 |             4 | Property 1=Enabled, Property 1=Disable, Property 1=Hovred, Property 1=Focused                                                                                         |
| error                            | 3838:101796 |             4 | Property 1=Disable, Property 1=Hovred, Property 1=Enabled, Property 1=Focused                                                                                         |
| ev_charger                       | 3838:100645 |             4 | Property 1=Focused, Property 1=Hovered, Property 1=Enabled, Property 1=Disable                                                                                        |
| event_available                  | 3838:102483 |             4 | Property 1=Enabled, Property 1=Disable, Property 1=Focused, Property 1=Hovred                                                                                         |
| event_note                       | 3838:102220 |             4 | Property 1=Focused, Property 1=Disable, Property 1=Hovred, Property 1=Enabled                                                                                         |
| expand_less                      | 3838:101699 |             4 | Property 1=Focused, Property 1=Disable, Property 1=Enabled, Property 1=Hovred                                                                                         |
| expand_more                      | 3838:101693 |             4 | Property 1=Hovred, Property 1=Enabled, Property 1=Disable, Property 1=Focused                                                                                         |
| family_history                   | 4225:36200  |             4 | Property 1=Default, Property 1=Focused, Property 1=Hovred, Property 1=Disable                                                                                         |
| file_copy                        | 3838:102152 |             4 | Property 1=Focused, Property 1=Enabled, Property 1=Hovred, Property 1=Disable                                                                                         |
| filter_alt                       | 3838:102384 |             4 | Property 1=Hovred, Property 1=Focused, Property 1=Disable, Property 1=Enabled                                                                                         |
| filter_alt_off                   | 3838:102468 |             4 | Property 1=Hovred, Property 1=Enabled, Property 1=Focused, Property 1=Disable                                                                                         |
| Fishbone                         | 3838:103159 |             4 | Property 1=Focused, Property 1=Disable, Property 1=Hovred, Property 1=Enabled                                                                                         |
| fitbit_arrow_downward            | 3838:101825 |             4 | Property 1=Enabled, Property 1=Disable, Property 1=Focused, Property 1=Hovred                                                                                         |
| fitbit_arrow_left_customized     | 3838:102808 |             4 | Property 1=Enabled, Property 1=Focused, Property 1=Disable, Property 1=Hovred                                                                                         |
| fitbit_arrow_right_customized    | 3838:102767 |             4 | Property 1=Disable, Property 1=Focused, Property 1=Enabled, Property 1=Hovred                                                                                         |
| fitbit_arrow_upward              | 3838:101855 |             4 | Property 1=Focused, Property 1=Disable, Property 1=Enabled, Property 1=Hovred                                                                                         |
| folder_open                      | 3838:102438 |             4 | Property 1=Focused, Property 1=Enabled, Property 1=Hovred, Property 1=Disable                                                                                         |
| forklift\_                       | 3838:102443 |             4 | Property 1=Disable, Property 1=Enabled, Property 1=Hovred, Property 1=Focused                                                                                         |
| forward                          | 3838:100670 |             4 | Property 1=Enabled, Property 1=Disable, Property 1=Hovered, Property 1=Focused                                                                                        |
| garage_home                      | 3838:100635 |             4 | Property 1=Enabled, Property 1=Disable, Property 1=Hovered, Property 1=Focused                                                                                        |
| grid_view                        | 3838:102266 |             4 | Property 1=Hovred, Property 1=Disable, Property 1=Enabled, Property 1=Focused                                                                                         |
| heat_pump                        | 3838:102851 |             4 | Property 1=Focused, Property 1=Hovred, Property 1=Enabled, Property 1=Disable                                                                                         |
| help                             | 4228:36186  |             4 | Property 1=Hovred, Property 1=Disable, Property 1=Focused, Property 1=Default                                                                                         |
| help_center                      | 4225:36180  |             4 | Property 1=Disable, Property 1=Focused, Property 1=Default, Property 1=Hovred                                                                                         |
| highway_customized               | 3838:102745 |             4 | Property 1=Focused, Property 1=Enabled, Property 1=Disable, Property 1=Hovred                                                                                         |
| horizontal_distribute 1          | 3838:102037 |             4 | Property 1=Focused, Property 1=Disable, Property 1=Enabled, Property 1=Hovred                                                                                         |
| image                            | 3838:102119 |             4 | Property 1=Hovred, Property 1=Enabled, Property 1=Focused, Property 1=Disable                                                                                         |
| import_contacts                  | 4327:36190  |             4 | Property 1=Hovred, Property 1=Focused, Property 1=Disable, Property 1=Default                                                                                         |
| indeterminate_check_box          | 3838:102308 |             4 | Property 1=Focused, Property 1=Enabled, Property 1=Disable, Property 1=Hovred                                                                                         |
| info                             | 3838:101720 |             4 | Property 1=Disable, Property 1=Focused, Property 1=Enabled, Property 1=Hovred                                                                                         |
| insights                         | 3838:102341 |             4 | Property 1=Focused, Property 1=Hovred, Property 1=Enabled, Property 1=Disable                                                                                         |
| keyboard_double_arrow_down       | 3838:102210 |             4 | Property 1=Disable, Property 1=Focused, Property 1=Enabled, Property 1=Hovred                                                                                         |
| keyboard_double_arrow_left       | 3838:102199 |             4 | Property 1=Disable, Property 1=Focused, Property 1=Hovred, Property 1=Enabled                                                                                         |
| keyboard_double_arrow_right      | 3838:102067 |             4 | Property 1=Focused, Property 1=Enabled, Property 1=Hovred, Property 1=Disable                                                                                         |
| keyboard_double_arrow_right_left | 3838:102827 |             4 | Property 1=Hovred, Property 1=Enabled, Property 1=Disable, Property 1=Focused                                                                                         |
| keyboard_double_arrow_up         | 3838:102231 |             4 | Property 1=Hovred, Property 1=Disable, Property 1=Enabled, Property 1=Focused                                                                                         |
| keyboard_return                  | 3838:102090 |             4 | Property 1=Disable, Property 1=Enabled, Property 1=Hovred, Property 1=Focused                                                                                         |
| linear_scale                     | 3838:102493 |             4 | Property 1=Hovred, Property 1=Disable, Property 1=Enabled, Property 1=Focused                                                                                         |
| link                             | 3838:102374 |             4 | Property 1=Focused, Property 1=Hovred, Property 1=Enabled, Property 1=Disable                                                                                         |
| list                             | 3838:102276 |             4 | Property 1=Enabled, Property 1=Hovred, Property 1=Focused, Property 1=Disable                                                                                         |
| Load handling                    | 3838:102871 |             4 | Property 1=Disable, Property 1=Hovred, Property 1=Enabled, Property 1=Focused                                                                                         |
| local_parking                    | 3797:54268  |             4 | Property 1=Hovred, Property 1=Enabled, Property 1=Disable, Property 1=Focused                                                                                         |
| local_shipping                   | 3838:100650 |             4 | Property 1=Focused, Property 1=Enabled, Property 1=Hovered, Property 1=Disable                                                                                        |
| lock                             | 3838:100842 |             4 | Property 1=Enabled, Property 1=Hovered, Property 1=Disable, Property 1=Focused                                                                                        |
| lock_open                        | 3838:100847 |             4 | Property 1=Enabled, Property 1=Focused, Property 1=Hovered, Property 1=Disable                                                                                        |
| logout                           | 4225:36210  |             4 | Property 1=Disable, Property 1=Default, Property 1=Focused, Property 1=Hovred                                                                                         |
| Manual operation                 | 4822:37875  |             4 | Property 1=Default, Property 1=Variant4, Property 1=Variant2, Property 1=Variant3                                                                                     |
| more_horiz                       | 3838:102251 |             4 | Property 1=Focused, Property 1=Disable, Property 1=Hovred, Property 1=Enabled                                                                                         |
| more_vert                        | 3838:102256 |             4 | Property 1=Enabled, Property 1=Hovred, Property 1=Focused, Property 1=Disable                                                                                         |
| near_me_customized               | 3838:102727 |             4 | Property 1=Focused, Property 1=Hovred, Property 1=Enabled, Property 1=Disable                                                                                         |
| notes                            | 3838:102215 |             4 | Property 1=Enabled, Property 1=Focused, Property 1=Disable, Property 1=Hovred                                                                                         |
| notifications                    | 3838:102095 |             4 | Property 1=Disable, Property 1=Enabled, Property 1=Hovred, Property 1=Focused                                                                                         |
| obstacle_customized              | 3838:103079 |             4 | Property 1=Disable, Property 1=Enabled, Property 1=Focused, Property 1=Hovred                                                                                         |
| open_in_full                     | 3838:102189 |             4 | Property 1=Focused, Property 1=Enabled, Property 1=Disable, Property 1=Hovred                                                                                         |
| open_in_new                      | 3838:102503 |             4 | Property 1=Enabled, Property 1=Hovred, Property 1=Disable, Property 1=Focused                                                                                         |
| package_2                        | 3838:102336 |             4 | Property 1=Disable, Property 1=Enabled, Property 1=Hovred, Property 1=Focused                                                                                         |
| pan_tool_alt                     | 3838:102184 |             4 | Property 1=Enabled, Property 1=Hovred, Property 1=Focused, Property 1=Disable                                                                                         |
| pause                            | 3838:102085 |             4 | Property 1=Disable, Property 1=Hovred, Property 1=Focused, Property 1=Enabled                                                                                         |
| pause_circle                     | 4181:36476  |             4 | Property 1=Default, Property 1=Focused, Property 1=Disable, Property 1=Hovred                                                                                         |
| person_add                       | 3838:102313 |             4 | Property 1=Hovred, Property 1=Focused, Property 1=Enabled, Property 1=Disable                                                                                         |
| Pivot                            | 5386:27094  |             4 | Property 1=Variant3, Property 1=Default, Property 1=Variant4, Property 1=Variant2                                                                                     |
| play_arrow                       | 3838:102080 |             4 | Property 1=Enabled, Property 1=Hovred, Property 1=Disable, Property 1=Focused                                                                                         |
| Preferences custom               | 3838:102885 |             4 | Property 1=Hovred, Property 1=Focused, Property 1=Enabled, Property 1=Disable                                                                                         |
| quick_reorder                    | 3948:34900  |             4 | Property 1=Enabled, Property 1=Disable, Property 1=Focused, Property 1=Hovred                                                                                         |
| remove                           | 3838:100746 |             4 | Property 1=Focused, Property 1=Disable, Property 1=Hovered, Property 1=Enabled                                                                                        |
| reply                            | 3838:100665 |             4 | Property 1=Enabled, Property 1=Hovered, Property 1=Disable, Property 1=Focused                                                                                        |
| rotate_right                     | 3838:102331 |             4 | Property 1=Disable, Property 1=Hovred, Property 1=Focused, Property 1=Enabled                                                                                         |
| Rotate2                          | 3838:103204 |             4 | Property 1=Focused, Property 1=Hovred, Property 1=Enabled, Property 1=Disable                                                                                         |
| search                           | 3838:102159 |             4 | Property 1=Focused, Property 1=Enabled, Property 1=Disable, Property 1=Hovred                                                                                         |
| search_off                       | 3838:102246 |             4 | Property 1=Focused, Property 1=Enabled, Property 1=Hovred, Property 1=Disable                                                                                         |
| settings                         | 3838:102473 |             4 | Property 1=Hovred, Property 1=Focused, Property 1=Disable, Property 1=Enabled                                                                                         |
| shelves                          | 3838:100640 |             4 | Property 1=Focused, Property 1=Hovered, Property 1=Enabled, Property 1=Disable                                                                                        |
| signpost                         | 3838:102399 |             4 | Property 1=Focused, Property 1=Hovred, Property 1=Disable, Property 1=Enabled                                                                                         |
| smart_toy                        | 3838:102478 |             4 | Property 1=Enabled, Property 1=Hovred, Property 1=Focused, Property 1=Disable                                                                                         |
| stacked_line_chart               | 4802:37868  |             4 | Property 1=Default, Property 1=Hovred, Property 1=Focused, Property 1=Disable                                                                                         |
| straighten                       | 3838:102356 |             4 | Property 1=Disable, Property 1=Enabled, Property 1=Hovred, Property 1=Focused                                                                                         |
| swipe_right_alt                  | 3838:100660 |             4 | Property 1=Enabled, Property 1=Focused, Property 1=Disable, Property 1=Hovered                                                                                        |
| sync                             | 3838:102379 |             4 | Property 1=Enabled, Property 1=Focused, Property 1=Disable, Property 1=Hovred                                                                                         |
| task_alt                         | 3838:101714 |             4 | Property 1=Focused, Property 1=Enabled, Property 1=Hovred, Property 1=Disable                                                                                         |
| team_dashboard 1                 | 4342:39201  |             4 | Property 1=Disable, Property 1=Default, Property 1=Focused, Property 1=Hovred                                                                                         |
| test more icon                   | 3838:103185 |             4 | Property 1=Enabled, Property 1=Disable, Property 1=Focused, Property 1=Hovred                                                                                         |
| translate                        | 4228:36196  |             4 | Property 1=Focused, Property 1=Hovred, Property 1=Disable, Property 1=Default                                                                                         |
| upload_file                      | 3838:102351 |             4 | Property 1=Enabled, Property 1=Focused, Property 1=Hovred, Property 1=Disable                                                                                         |
| Vertical                         | 3838:103172 |             4 | Property 1=Disable, Property 1=Focused, Property 1=Hovred, Property 1=Enabled                                                                                         |
| vertical_distribute              | 3838:102236 |             4 | Property 1=Disable, Property 1=Hovred, Property 1=Enabled, Property 1=Focused                                                                                         |
| view_compact                     | 3838:102052 |             4 | Property 1=Disable, Property 1=Focused, Property 1=Hovred, Property 1=Enabled                                                                                         |
| view_in_ar                       | 3838:102042 |             4 | Property 1=Disable, Property 1=Hovred, Property 1=Enabled, Property 1=Focused                                                                                         |
| view_list                        | 3838:102271 |             4 | Property 1=Hovred, Property 1=Enabled, Property 1=Focused, Property 1=Disable                                                                                         |
| view_module                      | 3838:102057 |             4 | Property 1=Hovred, Property 1=Focused, Property 1=Disable, Property 1=Enabled                                                                                         |
| visibility                       | 3838:100852 |             4 | Property 1=Enabled, Property 1=Disable, Property 1=Hovered, Property 1=Focused                                                                                        |
| visibility_off                   | 3838:100857 |             4 | Property 1=Enabled, Property 1=Hovered, Property 1=Disable, Property 1=Focused                                                                                        |
| wall_customized                  | 3838:103049 |             4 | Property 1=Disable, Property 1=Hovred, Property 1=Focused, Property 1=Enabled                                                                                         |
| warning                          | 3838:101678 |             4 | Property 1=Hovred, Property 1=Disable, Property 1=Focused, Property 1=Enabled                                                                                         |
| wifi                             | 4225:36190  |             4 | Property 1=Focused, Property 1=Disable, Property 1=Hovred, Property 1=Default                                                                                         |
| zoom_in                          | 3838:102174 |             4 | Property 1=Focused, Property 1=Hovred, Property 1=Enabled, Property 1=Disable                                                                                         |
| zoom_out                         | 3838:102179 |             4 | Property 1=Enabled, Property 1=Disable, Property 1=Hovred, Property 1=Focused                                                                                         |
| zoom_out_map                     | 3838:100675 |             4 | State=Disable, State=Enabled, State=Hovered, State=Focused                                                                                                            |
| Mini icons                       | 3838:103038 |             3 | Property 1=Pallet, Property 1=Rotate, Property 1=Lane                                                                                                                 |

## Components in Icons (with component set prefix)

| ComponentSet: Name                                         | Node ID     | Component set                    | Component set node id |
| ---------------------------------------------------------- | ----------- | -------------------------------- | --------------------- |
| (no component set): forklift                               | 1074:6388   | (no component set)               |                       |
| (no component set): Pallet image / EPAL_1                  | 1551:9425   | (no component set)               |                       |
| (no component set): Pallet image / EPAL_2                  | 1551:9424   | (no component set)               |                       |
| (no component set): Pallet image / EPAL_CHARM              | 1551:9502   | (no component set)               |                       |
| (no component set): Pallet image / P1208A                  | 1551:9423   | (no component set)               |                       |
| (no component set): Pallet image / P1208B                  | 1551:9422   | (no component set)               |                       |
| (no component set): Pallet image / WP                      | 1551:9503   | (no component set)               |                       |
| (no component set): Pallet image / WP_ASIA                 | 1551:9504   | (no component set)               |                       |
| (no component set): Thumbnail 1                            | 2025:7880   | (no component set)               |                       |
| (no component set): Thumbnail 2                            | 2025:7881   | (no component set)               |                       |
| (no component set): Thumbnail 3                            | 2025:7879   | (no component set)               |                       |
| (no component set): Thumbnail 4                            | 2025:7877   | (no component set)               |                       |
| (no component set): Thumbnail 5                            | 2025:7878   | (no component set)               |                       |
| (no component set): Thumbnail 6                            | 2025:7885   | (no component set)               |                       |
| (no component set): Thumbnail 7                            | 2025:7887   | (no component set)               |                       |
| (no component set): Top bar - profile                      | 1031:9640   | (no component set)               |                       |
| (no component set): Tugg                                   | 4842:37921  | (no component set)               |                       |
| (no component set): Vehicle image / CB18                   | 1551:9537   | (no component set)               |                       |
| (no component set): Vehicle image / CDI                    | 1551:9540   | (no component set)               |                       |
| (no component set): Vehicle image / Charm                  | 1551:9538   | (no component set)               |                       |
| (no component set): Vehicle image / ML2                    | 2698:516    | (no component set)               |                       |
| (no component set): Vehicle image / RAE250                 | 1551:9393   | (no component set)               |                       |
| (no component set): Vehicle image / Raymond9700            | 1551:9539   | (no component set)               |                       |
| (no component set): Vehicle image / SAE160_1600            | 1551:9394   | (no component set)               |                       |
| (no component set): Vehicle image/AFG_8AFBR30              | 2698:513    | (no component set)               |                       |
| (no component set): Vehicle image/RS150                    | 5356:36454  | (no component set)               |                       |
| 361: Property 1=Disable                                    | 3838:102620 | 361                              | 3838:102075           |
| 361: Property 1=Enabled                                    | 1233:9097   | 361                              | 3838:102075           |
| 361: Property 1=Focused                                    | 3838:102078 | 361                              | 3838:102075           |
| 361: Property 1=Hovred                                     | 3838:102076 | 361                              | 3838:102075           |
| 3D icon: Property 1=Disable                                | 3838:103157 | 3D icon                          | 3838:103152           |
| 3D icon: Property 1=Enabled                                | 2553:70     | 3D icon                          | 3838:103152           |
| 3D icon: Property 1=Focused                                | 3838:103155 | 3D icon                          | 3838:103152           |
| 3D icon: Property 1=Hovred                                 | 3838:103153 | 3D icon                          | 3838:103152           |
| 3d_rotation: Property 1=Disable                            | 3838:102578 | 3d_rotation                      | 3838:102047           |
| 3d_rotation: Property 1=Enabled                            | 1230:9089   | 3d_rotation                      | 3838:102047           |
| 3d_rotation: Property 1=Focused                            | 3838:102050 | 3d_rotation                      | 3838:102047           |
| 3d_rotation: Property 1=Hovred                             | 3838:102048 | 3d_rotation                      | 3838:102047           |
| add: Property 1=Disable                                    | 3838:102534 | add                              | 3838:100738           |
| add: Property 1=Enabled                                    | 1065:6391   | add                              | 3838:100738           |
| add: Property 1=Focused                                    | 3838:100742 | add                              | 3838:100738           |
| add: Property 1=Hovered                                    | 3838:100739 | add                              | 3838:100738           |
| ads_click: Property 1=Disable                              | 3838:102641 | ads_click                        | 3838:102458           |
| ads_click: Property 1=Enabled                              | 2636:283    | ads_click                        | 3838:102458           |
| ads_click: Property 1=Focused                              | 3838:102461 | ads_click                        | 3838:102458           |
| ads_click: Property 1=Hovred                               | 3838:102459 | ads_click                        | 3838:102458           |
| align_horizontal_center: Property 1=Disable                | 3838:102659 | align_horizontal_center          | 3838:102409           |
| align_horizontal_center: Property 1=Enabled                | 2116:7921   | align_horizontal_center          | 3838:102409           |
| align_horizontal_center: Property 1=Focused                | 3838:102412 | align_horizontal_center          | 3838:102409           |
| align_horizontal_center: Property 1=Hovred                 | 3838:102410 | align_horizontal_center          | 3838:102409           |
| align_horizontal_left: Property 1=Disable                  | 3838:102661 | align_horizontal_left            | 3838:102404           |
| align_horizontal_left: Property 1=Enabled                  | 2116:7922   | align_horizontal_left            | 3838:102404           |
| align_horizontal_left: Property 1=Focused                  | 3838:102407 | align_horizontal_left            | 3838:102404           |
| align_horizontal_left: Property 1=Hovred                   | 3838:102405 | align_horizontal_left            | 3838:102404           |
| align_horizontal_right: Property 1=Disable                 | 3838:102657 | align_horizontal_right           | 3838:102414           |
| align_horizontal_right: Property 1=Enabled                 | 2116:7923   | align_horizontal_right           | 3838:102414           |
| align_horizontal_right: Property 1=Focused                 | 3838:102417 | align_horizontal_right           | 3838:102414           |
| align_horizontal_right: Property 1=Hovred                  | 3838:102415 | align_horizontal_right           | 3838:102414           |
| align_vertical_bottom: Property 1=Disable                  | 3838:102572 | align_vertical_bottom            | 3838:102032           |
| align_vertical_bottom: Property 1=Disable                  | 3838:102651 | align_vertical_bottom            | 3838:102433           |
| align_vertical_bottom: Property 1=Enabled                  | 1221:8293   | align_vertical_bottom            | 3838:102032           |
| align_vertical_bottom: Property 1=Enabled                  | 2116:7925   | align_vertical_bottom            | 3838:102433           |
| align_vertical_bottom: Property 1=Focused                  | 3838:102035 | align_vertical_bottom            | 3838:102032           |
| align_vertical_bottom: Property 1=Focused                  | 3838:102436 | align_vertical_bottom            | 3838:102433           |
| align_vertical_bottom: Property 1=Hovred                   | 3838:102033 | align_vertical_bottom            | 3838:102032           |
| align_vertical_bottom: Property 1=Hovred                   | 3838:102434 | align_vertical_bottom            | 3838:102433           |
| align_vertical_center: Property 1=Disable                  | 3838:102570 | align_vertical_center            | 3838:101995           |
| align_vertical_center: Property 1=Disable                  | 3838:102653 | align_vertical_center            | 3838:102424           |
| align_vertical_center: Property 1=Enabled                  | 1221:8303   | align_vertical_center            | 3838:101995           |
| align_vertical_center: Property 1=Enabled                  | 2116:7926   | align_vertical_center            | 3838:102424           |
| align_vertical_center: Property 1=Focused                  | 3838:102001 | align_vertical_center            | 3838:101995           |
| align_vertical_center: Property 1=Focused                  | 3838:102431 | align_vertical_center            | 3838:102424           |
| align_vertical_center: Property 1=Hovred                   | 3838:101996 | align_vertical_center            | 3838:101995           |
| align_vertical_center: Property 1=Hovred                   | 3838:102425 | align_vertical_center            | 3838:102424           |
| align_vertical_top: Property 1=Disable                     | 3838:102568 | align_vertical_top               | 3838:102008           |
| align_vertical_top: Property 1=Disable                     | 3838:102655 | align_vertical_top               | 3838:102419           |
| align_vertical_top: Property 1=Enabled                     | 1221:8295   | align_vertical_top               | 3838:102008           |
| align_vertical_top: Property 1=Enabled                     | 2116:7924   | align_vertical_top               | 3838:102419           |
| align_vertical_top: Property 1=Focused                     | 3838:102025 | align_vertical_top               | 3838:102008           |
| align_vertical_top: Property 1=Focused                     | 3838:102422 | align_vertical_top               | 3838:102419           |
| align_vertical_top: Property 1=Hovred                      | 3838:102009 | align_vertical_top               | 3838:102008           |
| align_vertical_top: Property 1=Hovred                      | 3838:102420 | align_vertical_top               | 3838:102419           |
| arrow_drop_down: Property 1=Disable                        | 3838:102566 | arrow_drop_down                  | 3838:101987           |
| arrow_drop_down: Property 1=Enabled                        | 1125:10127  | arrow_drop_down                  | 3838:101987           |
| arrow_drop_down: Property 1=Focused                        | 3838:101992 | arrow_drop_down                  | 3838:101987           |
| arrow_drop_down: Property 1=Hovred                         | 3838:101988 | arrow_drop_down                  | 3838:101987           |
| arrow_drop_down_customized: Property 1=Disable             | 3838:102765 | arrow_drop_down_customized       | 3838:102759           |
| arrow_drop_down_customized: Property 1=Enabled             | 1074:6387   | arrow_drop_down_customized       | 3838:102759           |
| arrow_drop_down_customized: Property 1=Focused             | 3838:102762 | arrow_drop_down_customized       | 3838:102759           |
| arrow_drop_down_customized: Property 1=Hovred              | 3838:102760 | arrow_drop_down_customized       | 3838:102759           |
| arrow_drop_up: Property 1=Disable                          | 3838:102588 | arrow_drop_up                    | 3838:102194           |
| arrow_drop_up: Property 1=Enabled                          | 1524:9965   | arrow_drop_up                    | 3838:102194           |
| arrow_drop_up: Property 1=Focused                          | 3838:102197 | arrow_drop_up                    | 3838:102194           |
| arrow_drop_up: Property 1=Hovred                           | 3838:102195 | arrow_drop_up                    | 3838:102194           |
| attach_file: Property 1=Disable                            | 3838:102679 | attach_file                      | 3838:102346           |
| attach_file: Property 1=Enabled                            | 1766:8337   | attach_file                      | 3838:102346           |
| attach_file: Property 1=Focused                            | 3838:102349 | attach_file                      | 3838:102346           |
| attach_file: Property 1=Hovred                             | 3838:102347 | attach_file                      | 3838:102346           |
| autorenew: Property 1=Disable                              | 3838:102645 | autorenew                        | 3838:102448           |
| autorenew: Property 1=Enabled                              | 2688:283    | autorenew                        | 3838:102448           |
| autorenew: Property 1=Focused                              | 3838:102451 | autorenew                        | 3838:102448           |
| autorenew: Property 1=Hovred                               | 3838:102449 | autorenew                        | 3838:102448           |
| back_hand: Property 1=Disable                              | 3838:102524 | back_hand                        | 3838:100655           |
| back_hand: Property 1=Enabled                              | 1234:9100   | back_hand                        | 3838:100655           |
| back_hand: Property 1=Focused                              | 3838:100658 | back_hand                        | 3838:100655           |
| back_hand: Property 1=Hovered                              | 3838:100656 | back_hand                        | 3838:100655           |
| balance: Property 1=Disable                                | 3838:102665 | balance                          | 3838:102394           |
| balance: Property 1=Enabled                                | 2087:7924   | balance                          | 3838:102394           |
| balance: Property 1=Focused                                | 3838:102397 | balance                          | 3838:102394           |
| balance: Property 1=Hovred                                 | 3838:102395 | balance                          | 3838:102394           |
| block: Property 1=Disable                                  | 3838:102715 | block                            | 3838:102241           |
| block: Property 1=Enabled                                  | 1552:9399   | block                            | 3838:102241           |
| block: Property 1=Focused                                  | 3838:102244 | block                            | 3838:102241           |
| block: Property 1=Hovred                                   | 3838:102242 | block                            | 3838:102241           |
| bolt: Property 1=Disable                                   | 3838:102512 | bolt                             | 3797:54262            |
| bolt: Property 1=Enabled                                   | 2632:263    | bolt                             | 3797:54262            |
| bolt: Property 1=Focused                                   | 3797:54265  | bolt                             | 3797:54262            |
| bolt: Property 1=Hovred                                    | 3797:54263  | bolt                             | 3797:54262            |
| bookmark: Property 1=Disable                               | 4102:34255  | bookmark                         | 4102:34250            |
| bookmark: Property 1=Enabled                               | 4102:34249  | bookmark                         | 4102:34250            |
| bookmark: Property 1=Focused                               | 4102:34253  | bookmark                         | 4102:34250            |
| bookmark: Property 1=Hovred                                | 4102:34251  | bookmark                         | 4102:34250            |
| calendar_add_on: Property 1=Disable                        | 3838:102721 | calendar_add_on                  | 3838:102226           |
| calendar_add_on: Property 1=Enabled                        | 2714:14     | calendar_add_on                  | 3838:102226           |
| calendar_add_on: Property 1=Focused                        | 3838:102229 | calendar_add_on                  | 3838:102226           |
| calendar_add_on: Property 1=Hovred                         | 3838:102227 | calendar_add_on                  | 3838:102226           |
| cancel: Property 1=Disable                                 | 3838:102510 | cancel                           | 3797:54257            |
| cancel: Property 1=Enabled                                 | 1292:8265   | cancel                           | 3797:54257            |
| cancel: Property 1=Focused                                 | 3797:54260  | cancel                           | 3797:54257            |
| cancel: Property 1=Hovred                                  | 3797:54258  | cancel                           | 3797:54257            |
| center_focus_weak: Property 1=Default                      | 4181:36467  | center_focus_weak                | 4181:36469            |
| center_focus_weak: Property 1=Disable                      | 4181:36474  | center_focus_weak                | 4181:36469            |
| center_focus_weak: Property 1=Focused                      | 4181:36472  | center_focus_weak                | 4181:36469            |
| center_focus_weak: Property 1=Hovred                       | 4181:36470  | center_focus_weak                | 4181:36469            |
| check: Property 1=Disable                                  | 3838:102602 | check                            | 3838:102147           |
| check: Property 1=Enabled                                  | 1387:9136   | check                            | 3838:102147           |
| check: Property 1=Focused                                  | 3838:102150 | check                            | 3838:102147           |
| check: Property 1=Hovred                                   | 3838:102148 | check                            | 3838:102147           |
| check_box_FILL_w: Property 1=Disable                       | 3838:102689 | check_box_FILL_w                 | 3838:102318           |
| check_box_FILL_w: Property 1=Enabled                       | 1698:8215   | check_box_FILL_w                 | 3838:102318           |
| check_box_FILL_w: Property 1=Focused                       | 3838:102329 | check_box_FILL_w                 | 3838:102318           |
| check_box_FILL_w: Property 1=Hovred                        | 3838:102319 | check_box_FILL_w                 | 3838:102318           |
| check_box_outline: Property 1=Disable                      | 3838:102695 | check_box_outline                | 3838:102291           |
| check_box_outline: Property 1=Enabled                      | 1682:8216   | check_box_outline                | 3838:102291           |
| check_box_outline: Property 1=Focused                      | 3838:102296 | check_box_outline                | 3838:102291           |
| check_box_outline: Property 1=Hovred                       | 3838:102292 | check_box_outline                | 3838:102291           |
| check_circle: Property 1=Disable                           | 3838:102514 | check_circle                     | 3797:54251            |
| check_circle: Property 1=Enabled                           | 2632:268    | check_circle                     | 3797:54251            |
| check_circle: Property 1=Focused                           | 3797:54254  | check_circle                     | 3797:54251            |
| check_circle: Property 1=Hovered                           | 3797:54252  | check_circle                     | 3797:54251            |
| check_small: Property 1=Disable                            | 3838:102629 | check_small                      | 3838:102488           |
| check_small: Property 1=Enabled                            | 2429:510    | check_small                      | 3838:102488           |
| check_small: Property 1=Focused                            | 3838:102491 | check_small                      | 3838:102488           |
| check_small: Property 1=Hovred                             | 3838:102489 | check_small                      | 3838:102488           |
| chevron_left: Property 1=Disable                           | 3838:102697 | chevron_left                     | 3838:102286           |
| chevron_left: Property 1=Enabled                           | 1649:8228   | chevron_left                     | 3838:102286           |
| chevron_left: Property 1=Focused                           | 3838:102289 | chevron_left                     | 3838:102286           |
| chevron_left: Property 1=Hovred                            | 3838:102287 | chevron_left                     | 3838:102286           |
| chevron_right: Property 1=Disable                          | 3838:102699 | chevron_right                    | 3838:102281           |
| chevron_right: Property 1=Enabled                          | 1649:8229   | chevron_right                    | 3838:102281           |
| chevron_right: Property 1=Focused                          | 3838:102284 | chevron_right                    | 3838:102281           |
| chevron_right: Property 1=Hovred                           | 3838:102282 | chevron_right                    | 3838:102281           |
| circle: Property 1=Disable                                 | 3838:102639 | circle                           | 3838:102463           |
| circle: Property 1=Enabled                                 | 2633:278    | circle                           | 3838:102463           |
| circle: Property 1=Focused                                 | 3838:102466 | circle                           | 3838:102463           |
| circle: Property 1=Hovred                                  | 3838:102464 | circle                           | 3838:102463           |
| close: Property 1=Disable                                  | 3838:102604 | close                            | 3838:102140           |
| close: Property 1=Enabled                                  | 1307:8124   | close                            | 3838:102140           |
| close: Property 1=Focused                                  | 3838:102145 | close                            | 3838:102140           |
| close: Property 1=Hovred                                   | 3838:102141 | close                            | 3838:102140           |
| construction: Property 1=Default                           | 4228:36169  | construction                     | 4228:36170            |
| construction: Property 1=Disable                           | 4228:36175  | construction                     | 4228:36170            |
| construction: Property 1=Focused                           | 4228:36173  | construction                     | 4228:36170            |
| construction: Property 1=Hovred                            | 4228:36171  | construction                     | 4228:36170            |
| contrast: Property 1=Default                               | 4247:36169  | contrast                         | 4247:36170            |
| contrast: Property 1=Disable                               | 4247:36175  | contrast                         | 4247:36170            |
| contrast: Property 1=Focused                               | 4247:36173  | contrast                         | 4247:36170            |
| contrast: Property 1=Hovred                                | 4247:36171  | contrast                         | 4247:36170            |
| conveyor_belt: Property 1=Disable                          | 3838:102548 | conveyor_belt                    | 3838:101673           |
| conveyor_belt: Property 1=Enabled                          | 1074:6377   | conveyor_belt                    | 3838:101673           |
| conveyor_belt: Property 1=Focused                          | 3838:101676 | conveyor_belt                    | 3838:101673           |
| conveyor_belt: Property 1=Hovred                           | 3838:101674 | conveyor_belt                    | 3838:101673           |
| crop: Property 1=Disable                                   | 3838:102625 | crop                             | 3838:102498           |
| crop: Property 1=Enabled                                   | 2418:25     | crop                             | 3838:102498           |
| crop: Property 1=Focused                                   | 3838:102501 | crop                             | 3838:102498           |
| crop: Property 1=Hovred                                    | 3838:102499 | crop                             | 3838:102498           |
| crop_square: Property 1=Disable                            | 3838:102546 | crop_square                      | 3838:102062           |
| crop_square: Property 1=Enabled                            | 1230:9088   | crop_square                      | 3838:102062           |
| crop_square: Property 1=Focused                            | 3838:102065 | crop_square                      | 3838:102062           |
| crop_square: Property 1=Hovred                             | 3838:102063 | crop_square                      | 3838:102062           |
| crossword: Property 1=Default                              | 4334:39008  | crossword                        | 4334:39009            |
| crossword: Property 1=Disable                              | 4334:39014  | crossword                        | 4334:39009            |
| crossword: Property 1=Focused                              | 4334:39012  | crossword                        | 4334:39009            |
| crossword: Property 1=Hovred                               | 4334:39010  | crossword                        | 4334:39009            |
| dashboard: Property 1=Disable                              | 3838:102667 | dashboard                        | 3838:102389           |
| dashboard: Property 1=Enabled                              | 2035:7942   | dashboard                        | 3838:102389           |
| dashboard: Property 1=Focused                              | 3838:102392 | dashboard                        | 3838:102389           |
| dashboard: Property 1=Hovred                               | 3838:102390 | dashboard                        | 3838:102389           |
| delete: Property 1=Disable                                 | 3838:102608 | delete                           | 3838:102124           |
| delete: Property 1=Enabled                                 | 1285:8270   | delete                           | 3838:102124           |
| delete: Property 1=Focused                                 | 3838:102131 | delete                           | 3838:102124           |
| delete: Property 1=Hovred                                  | 3838:102125 | delete                           | 3838:102124           |
| deployed: Property 1=Disable                               | 3838:102643 | deployed                         | 3838:102453           |
| deployed: Property 1=Enabled                               | 2659:25     | deployed                         | 3838:102453           |
| deployed: Property 1=Focused                               | 3838:102456 | deployed                         | 3838:102453           |
| deployed: Property 1=Hovred                                | 3838:102454 | deployed                         | 3838:102453           |
| do_not_disturb_on: Property 1=Default                      | 4259:36180  | do_not_disturb_on                | 4259:36181            |
| do_not_disturb_on: Property 1=Disable                      | 4259:36186  | do_not_disturb_on                | 4259:36181            |
| do_not_disturb_on: Property 1=Focused                      | 4259:36184  | do_not_disturb_on                | 4259:36181            |
| do_not_disturb_on: Property 1=Hovred                       | 4259:36182  | do_not_disturb_on                | 4259:36181            |
| download: Property 1=Disable                               | 3838:102606 | download                         | 3838:102135           |
| download: Property 1=Enabled                               | 1293:8324   | download                         | 3838:102135           |
| download: Property 1=Focused                               | 3838:102138 | download                         | 3838:102135           |
| download: Property 1=Hovred                                | 3838:102136 | download                         | 3838:102135           |
| Duplicate: Property 1=Disable                              | 3838:103105 | Duplicate                        | 3838:103086           |
| Duplicate: Property 1=Enabled                              | 1524:9257   | Duplicate                        | 3838:103086           |
| Duplicate: Property 1=Focused                              | 3838:103102 | Duplicate                        | 3838:103086           |
| Duplicate: Property 1=Hovred                               | 3838:103087 | Duplicate                        | 3838:103086           |
| Duplicate 2: Property 1=Disable                            | 3838:103146 | Duplicate 2                      | 3838:103108           |
| Duplicate 2: Property 1=Enabled                            | 1524:9260   | Duplicate 2                      | 3838:103108           |
| Duplicate 2: Property 1=Focused                            | 3838:103140 | Duplicate 2                      | 3838:103108           |
| Duplicate 2: Property 1=Hovred                             | 3838:103109 | Duplicate 2                      | 3838:103108           |
| edit: Property 1=Disable                                   | 3838:102707 | edit                             | 3838:102261           |
| edit: Property 1=Enabled                                   | 1614:8197   | edit                             | 3838:102261           |
| edit: Property 1=Focused                                   | 3838:102264 | edit                             | 3838:102261           |
| edit: Property 1=Hovred                                    | 3838:102262 | edit                             | 3838:102261           |
| error: Property 1=Disable                                  | 3838:102560 | error                            | 3838:101796           |
| error: Property 1=Enabled                                  | 1118:7748   | error                            | 3838:101796           |
| error: Property 1=Focused                                  | 3838:101799 | error                            | 3838:101796           |
| error: Property 1=Hovred                                   | 3838:101797 | error                            | 3838:101796           |
| ev_charger: Property 1=Disable                             | 3838:102520 | ev_charger                       | 3838:100645           |
| ev_charger: Property 1=Enabled                             | 1065:6378   | ev_charger                       | 3838:100645           |
| ev_charger: Property 1=Focused                             | 3838:100648 | ev_charger                       | 3838:100645           |
| ev_charger: Property 1=Hovered                             | 3838:100646 | ev_charger                       | 3838:100645           |
| event_available: Property 1=Disable                        | 3838:102631 | event_available                  | 3838:102483           |
| event_available: Property 1=Enabled                        | 2631:256    | event_available                  | 3838:102483           |
| event_available: Property 1=Focused                        | 3838:102486 | event_available                  | 3838:102483           |
| event_available: Property 1=Hovred                         | 3838:102484 | event_available                  | 3838:102483           |
| event_note: Property 1=Disable                             | 3838:102723 | event_note                       | 3838:102220           |
| event_note: Property 1=Enabled                             | 2707:951    | event_note                       | 3838:102220           |
| event_note: Property 1=Focused                             | 3838:102224 | event_note                       | 3838:102220           |
| event_note: Property 1=Hovred                              | 3838:102221 | event_note                       | 3838:102220           |
| expand_less: Property 1=Disable                            | 3838:102554 | expand_less                      | 3838:101699           |
| expand_less: Property 1=Enabled                            | 1074:6376   | expand_less                      | 3838:101699           |
| expand_less: Property 1=Focused                            | 3838:101702 | expand_less                      | 3838:101699           |
| expand_less: Property 1=Hovred                             | 3838:101700 | expand_less                      | 3838:101699           |
| expand_more: Property 1=Disable                            | 3838:102552 | expand_more                      | 3838:101693           |
| expand_more: Property 1=Enabled                            | 1074:6382   | expand_more                      | 3838:101693           |
| expand_more: Property 1=Focused                            | 3838:101697 | expand_more                      | 3838:101693           |
| expand_more: Property 1=Hovred                             | 3838:101694 | expand_more                      | 3838:101693           |
| family_history: Property 1=Default                         | 4225:36199  | family_history                   | 4225:36200            |
| family_history: Property 1=Disable                         | 4225:36205  | family_history                   | 4225:36200            |
| family_history: Property 1=Focused                         | 4225:36203  | family_history                   | 4225:36200            |
| family_history: Property 1=Hovred                          | 4225:36201  | family_history                   | 4225:36200            |
| file_copy: Property 1=Disable                              | 3838:102600 | file_copy                        | 3838:102152           |
| file_copy: Property 1=Enabled                              | 1459:10309  | file_copy                        | 3838:102152           |
| file_copy: Property 1=Focused                              | 3838:102157 | file_copy                        | 3838:102152           |
| file_copy: Property 1=Hovred                               | 3838:102153 | file_copy                        | 3838:102152           |
| filter_alt: Property 1=Disable                             | 3838:102669 | filter_alt                       | 3838:102384           |
| filter_alt: Property 1=Enabled                             | 2020:7874   | filter_alt                       | 3838:102384           |
| filter_alt: Property 1=Focused                             | 3838:102387 | filter_alt                       | 3838:102384           |
| filter_alt: Property 1=Hovred                              | 3838:102385 | filter_alt                       | 3838:102384           |
| filter_alt_off: Property 1=Disable                         | 3838:102637 | filter_alt_off                   | 3838:102468           |
| filter_alt_off: Property 1=Enabled                         | 2632:273    | filter_alt_off                   | 3838:102468           |
| filter_alt_off: Property 1=Focused                         | 3838:102471 | filter_alt_off                   | 3838:102468           |
| filter_alt_off: Property 1=Hovred                          | 3838:102469 | filter_alt_off                   | 3838:102468           |
| Fishbone: Property 1=Disable                               | 3838:103168 | Fishbone                         | 3838:103159           |
| Fishbone: Property 1=Enabled                               | 2618:2801   | Fishbone                         | 3838:103159           |
| Fishbone: Property 1=Focused                               | 3838:103164 | Fishbone                         | 3838:103159           |
| Fishbone: Property 1=Hovred                                | 3838:103160 | Fishbone                         | 3838:103159           |
| fitbit_arrow_downward: Property 1=Disable                  | 3838:102562 | fitbit_arrow_downward            | 3838:101825           |
| fitbit_arrow_downward: Property 1=Enabled                  | 1125:9061   | fitbit_arrow_downward            | 3838:101825           |
| fitbit_arrow_downward: Property 1=Focused                  | 3838:101832 | fitbit_arrow_downward            | 3838:101825           |
| fitbit_arrow_downward: Property 1=Hovred                   | 3838:101826 | fitbit_arrow_downward            | 3838:101825           |
| fitbit_arrow_left_customized: Property 1=Disable           | 3838:102822 | fitbit_arrow_left_customized     | 3838:102808           |
| fitbit_arrow_left_customized: Property 1=Enabled           | 1125:9581   | fitbit_arrow_left_customized     | 3838:102808           |
| fitbit_arrow_left_customized: Property 1=Focused           | 3838:102811 | fitbit_arrow_left_customized     | 3838:102808           |
| fitbit_arrow_left_customized: Property 1=Hovred            | 3838:102809 | fitbit_arrow_left_customized     | 3838:102808           |
| fitbit_arrow_right_customized: Property 1=Disable          | 3838:102774 | fitbit_arrow_right_customized    | 3838:102767           |
| fitbit_arrow_right_customized: Property 1=Enabled          | 1125:9580   | fitbit_arrow_right_customized    | 3838:102767           |
| fitbit_arrow_right_customized: Property 1=Focused          | 3838:102770 | fitbit_arrow_right_customized    | 3838:102767           |
| fitbit_arrow_right_customized: Property 1=Hovred           | 3838:102768 | fitbit_arrow_right_customized    | 3838:102767           |
| fitbit_arrow_upward: Property 1=Disable                    | 3838:102564 | fitbit_arrow_upward              | 3838:101855           |
| fitbit_arrow_upward: Property 1=Enabled                    | 1125:9060   | fitbit_arrow_upward              | 3838:101855           |
| fitbit_arrow_upward: Property 1=Focused                    | 3838:101877 | fitbit_arrow_upward              | 3838:101855           |
| fitbit_arrow_upward: Property 1=Hovred                     | 3838:101856 | fitbit_arrow_upward              | 3838:101855           |
| folder_open: Property 1=Disable                            | 3838:102649 | folder_open                      | 3838:102438           |
| folder_open: Property 1=Enabled                            | 2693:2018   | folder_open                      | 3838:102438           |
| folder_open: Property 1=Focused                            | 3838:102441 | folder_open                      | 3838:102438           |
| folder_open: Property 1=Hovred                             | 3838:102439 | folder_open                      | 3838:102438           |
| forklift\_: Property 1=Disable                             | 3838:102647 | forklift\_                       | 3838:102443           |
| forklift\_: Property 1=Enabled                             | 2689:602    | forklift\_                       | 3838:102443           |
| forklift\_: Property 1=Focused                             | 3838:102446 | forklift\_                       | 3838:102443           |
| forklift\_: Property 1=Hovred                              | 3838:102444 | forklift\_                       | 3838:102443           |
| forward: Property 1=Disable                                | 3838:102530 | forward                          | 3838:100670           |
| forward: Property 1=Enabled                                | 1065:6389   | forward                          | 3838:100670           |
| forward: Property 1=Focused                                | 3838:100673 | forward                          | 3838:100670           |
| forward: Property 1=Hovered                                | 3838:100671 | forward                          | 3838:100670           |
| Gap and margin: Property 1=Horizontal gap between vehicles | 5311:73037  | Gap and margin                   | 5311:73039            |
| Gap and margin: Property 1=Margin left right               | 5311:73035  | Gap and margin                   | 5311:73039            |
| Gap and margin: Property 1=Margin top bottom               | 5311:73036  | Gap and margin                   | 5311:73039            |
| Gap and margin: Property 1=Rotate dimension                | 5315:42963  | Gap and margin                   | 5311:73039            |
| Gap and margin: Property 1=TEXT ICON                       | 5315:35975  | Gap and margin                   | 5311:73039            |
| Gap and margin: Property 1=Vertical gap between vehicles   | 5311:73038  | Gap and margin                   | 5311:73039            |
| garage_home: Property 1=Disable                            | 3838:102516 | garage_home                      | 3838:100635           |
| garage_home: Property 1=Enabled                            | 1065:6375   | garage_home                      | 3838:100635           |
| garage_home: Property 1=Focused                            | 3838:100638 | garage_home                      | 3838:100635           |
| garage_home: Property 1=Hovered                            | 3838:100636 | garage_home                      | 3838:100635           |
| grid_view: Property 1=Disable                              | 3838:102705 | grid_view                        | 3838:102266           |
| grid_view: Property 1=Enabled                              | 1618:8195   | grid_view                        | 3838:102266           |
| grid_view: Property 1=Focused                              | 3838:102269 | grid_view                        | 3838:102266           |
| grid_view: Property 1=Hovred                               | 3838:102267 | grid_view                        | 3838:102266           |
| heat: Property 1=Default                                   | 5386:27101  | heat                             | 5386:27102            |
| heat: Property 1=Disable                                   | 5386:27109  | heat                             | 5386:27102            |
| heat: Property 1=Focused                                   | 5386:27107  | heat                             | 5386:27102            |
| heat: Property 1=Hovred                                    | 5386:27103  | heat                             | 5386:27102            |
| heat: Property 1=Pressed                                   | 5386:27105  | heat                             | 5386:27102            |
| heat_pump: Property 1=Disable                              | 3838:102867 | heat_pump                        | 3838:102851           |
| heat_pump: Property 1=Enabled                              | 2669:27     | heat_pump                        | 3838:102851           |
| heat_pump: Property 1=Focused                              | 3838:102858 | heat_pump                        | 3838:102851           |
| heat_pump: Property 1=Hovred                               | 3838:102852 | heat_pump                        | 3838:102851           |
| help: Property 1=Default                                   | 4228:36185  | help                             | 4228:36186            |
| help: Property 1=Disable                                   | 4228:36191  | help                             | 4228:36186            |
| help: Property 1=Focused                                   | 4228:36189  | help                             | 4228:36186            |
| help: Property 1=Hovred                                    | 4228:36187  | help                             | 4228:36186            |
| help_center: Property 1=Default                            | 4225:36179  | help_center                      | 4225:36180            |
| help_center: Property 1=Disable                            | 4225:36185  | help_center                      | 4225:36180            |
| help_center: Property 1=Focused                            | 4225:36183  | help_center                      | 4225:36180            |
| help_center: Property 1=Hovred                             | 4225:36181  | help_center                      | 4225:36180            |
| highway_customized: Property 1=Disable                     | 3838:102750 | highway_customized               | 3838:102745           |
| highway_customized: Property 1=Enabled                     | 1074:6385   | highway_customized               | 3838:102745           |
| highway_customized: Property 1=Focused                     | 3838:102748 | highway_customized               | 3838:102745           |
| highway_customized: Property 1=Hovred                      | 3838:102746 | highway_customized               | 3838:102745           |
| horizontal_distribute 1: Property 1=Disable                | 3838:102574 | horizontal_distribute 1          | 3838:102037           |
| horizontal_distribute 1: Property 1=Enabled                | 1226:8005   | horizontal_distribute 1          | 3838:102037           |
| horizontal_distribute 1: Property 1=Focused                | 3838:102040 | horizontal_distribute 1          | 3838:102037           |
| horizontal_distribute 1: Property 1=Hovred                 | 3838:102038 | horizontal_distribute 1          | 3838:102037           |
| image: Property 1=Disable                                  | 3838:102610 | image                            | 3838:102119           |
| image: Property 1=Enabled                                  | 1285:8249   | image                            | 3838:102119           |
| image: Property 1=Focused                                  | 3838:102122 | image                            | 3838:102119           |
| image: Property 1=Hovred                                   | 3838:102120 | image                            | 3838:102119           |
| import_contacts: Property 1=Default                        | 4327:36189  | import_contacts                  | 4327:36190            |
| import_contacts: Property 1=Disable                        | 4327:36195  | import_contacts                  | 4327:36190            |
| import_contacts: Property 1=Focused                        | 4327:36193  | import_contacts                  | 4327:36190            |
| import_contacts: Property 1=Hovred                         | 4327:36191  | import_contacts                  | 4327:36190            |
| indeterminate_check_box: Property 1=Disable                | 3838:102693 | indeterminate_check_box          | 3838:102308           |
| indeterminate_check_box: Property 1=Enabled                | 1683:8224   | indeterminate_check_box          | 3838:102308           |
| indeterminate_check_box: Property 1=Focused                | 3838:102311 | indeterminate_check_box          | 3838:102308           |
| indeterminate_check_box: Property 1=Hovred                 | 3838:102309 | indeterminate_check_box          | 3838:102308           |
| info: Property 1=Disable                                   | 3838:102558 | info                             | 3838:101720           |
| info: Property 1=Enabled                                   | 1118:7746   | info                             | 3838:101720           |
| info: Property 1=Focused                                   | 3838:101725 | info                             | 3838:101720           |
| info: Property 1=Hovred                                    | 3838:101721 | info                             | 3838:101720           |
| insights: Property 1=Disable                               | 3838:102681 | insights                         | 3838:102341           |
| insights: Property 1=Enabled                               | 1699:8220   | insights                         | 3838:102341           |
| insights: Property 1=Focused                               | 3838:102344 | insights                         | 3838:102341           |
| insights: Property 1=Hovred                                | 3838:102342 | insights                         | 3838:102341           |
| keyboard_double_arrow_down: Property 1=Disable             | 3838:102584 | keyboard_double_arrow_down       | 3838:102210           |
| keyboard_double_arrow_down: Property 1=Enabled             | 1534:9409   | keyboard_double_arrow_down       | 3838:102210           |
| keyboard_double_arrow_down: Property 1=Focused             | 3838:102213 | keyboard_double_arrow_down       | 3838:102210           |
| keyboard_double_arrow_down: Property 1=Hovred              | 3838:102211 | keyboard_double_arrow_down       | 3838:102210           |
| keyboard_double_arrow_left: Property 1=Disable             | 3838:102586 | keyboard_double_arrow_left       | 3838:102199           |
| keyboard_double_arrow_left: Property 1=Enabled             | 1534:9410   | keyboard_double_arrow_left       | 3838:102199           |
| keyboard_double_arrow_left: Property 1=Focused             | 3838:102204 | keyboard_double_arrow_left       | 3838:102199           |
| keyboard_double_arrow_left: Property 1=Hovred              | 3838:102200 | keyboard_double_arrow_left       | 3838:102199           |
| keyboard_double_arrow_right: Property 1=Disable            | 3838:102687 | keyboard_double_arrow_right      | 3838:102067           |
| keyboard_double_arrow_right: Property 1=Enabled            | 1232:9093   | keyboard_double_arrow_right      | 3838:102067           |
| keyboard_double_arrow_right: Property 1=Focused            | 3838:102073 | keyboard_double_arrow_right      | 3838:102067           |
| keyboard_double_arrow_right: Property 1=Hovred             | 3838:102068 | keyboard_double_arrow_right      | 3838:102067           |
| keyboard_double_arrow_right_left: Property 1=Disable       | 3838:102847 | keyboard_double_arrow_right_left | 3838:102827           |
| keyboard_double_arrow_right_left: Property 1=Enabled       | 1535:9369   | keyboard_double_arrow_right_left | 3838:102827           |
| keyboard_double_arrow_right_left: Property 1=Focused       | 3838:102840 | keyboard_double_arrow_right_left | 3838:102827           |
| keyboard_double_arrow_right_left: Property 1=Hovred        | 3838:102828 | keyboard_double_arrow_right_left | 3838:102827           |
| keyboard_double_arrow_up: Property 1=Disable               | 3838:102719 | keyboard_double_arrow_up         | 3838:102231           |
| keyboard_double_arrow_up: Property 1=Enabled               | 1534:9408   | keyboard_double_arrow_up         | 3838:102231           |
| keyboard_double_arrow_up: Property 1=Focused               | 3838:102234 | keyboard_double_arrow_up         | 3838:102231           |
| keyboard_double_arrow_up: Property 1=Hovred                | 3838:102232 | keyboard_double_arrow_up         | 3838:102231           |
| keyboard_return: Property 1=Disable                        | 3838:102614 | keyboard_return                  | 3838:102090           |
| keyboard_return: Property 1=Enabled                        | 1240:8196   | keyboard_return                  | 3838:102090           |
| keyboard_return: Property 1=Focused                        | 3838:102093 | keyboard_return                  | 3838:102090           |
| keyboard_return: Property 1=Hovred                         | 3838:102091 | keyboard_return                  | 3838:102090           |
| linear_scale: Property 1=Disable                           | 3838:102627 | linear_scale                     | 3838:102493           |
| linear_scale: Property 1=Enabled                           | 2423:58     | linear_scale                     | 3838:102493           |
| linear_scale: Property 1=Focused                           | 3838:102496 | linear_scale                     | 3838:102493           |
| linear_scale: Property 1=Hovred                            | 3838:102494 | linear_scale                     | 3838:102493           |
| link: Property 1=Disable                                   | 3838:102673 | link                             | 3838:102374           |
| link: Property 1=Enabled                                   | 1837:8574   | link                             | 3838:102374           |
| link: Property 1=Focused                                   | 3838:102377 | link                             | 3838:102374           |
| link: Property 1=Hovred                                    | 3838:102375 | link                             | 3838:102374           |
| list: Property 1=Disable                                   | 3838:102701 | list                             | 3838:102276           |
| list: Property 1=Enabled                                   | 1618:8201   | list                             | 3838:102276           |
| list: Property 1=Focused                                   | 3838:102279 | list                             | 3838:102276           |
| list: Property 1=Hovred                                    | 3838:102277 | list                             | 3838:102276           |
| Load carrier types large: Property 1=EPAL_1                | 2453:1531   | Load carrier types large         | 2453:1535             |
| Load carrier types large: Property 1=EPAL_2                | 2453:1533   | Load carrier types large         | 2453:1535             |
| Load carrier types large: Property 1=EPAL_CHARM            | 2453:1530   | Load carrier types large         | 2453:1535             |
| Load carrier types large: Property 1=P1208A                | 2453:1532   | Load carrier types large         | 2453:1535             |
| Load carrier types large: Property 1=P1208B                | 2453:1534   | Load carrier types large         | 2453:1535             |
| Load carrier types large: Property 1=WP                    | 2453:1529   | Load carrier types large         | 2453:1535             |
| Load carrier types large: Property 1=WP_ASIA               | 2453:1528   | Load carrier types large         | 2453:1535             |
| Load handling: Property 1=Disable                          | 3838:102882 | Load handling                    | 3838:102871           |
| Load handling: Property 1=Enabled                          | 3355:20227  | Load handling                    | 3838:102871           |
| Load handling: Property 1=Focused                          | 3838:102878 | Load handling                    | 3838:102871           |
| Load handling: Property 1=Hovred                           | 3838:102872 | Load handling                    | 3838:102871           |
| local_parking: Property 1=Disable                          | 3838:102508 | local_parking                    | 3797:54268            |
| local_parking: Property 1=Enabled                          | 1065:6377   | local_parking                    | 3797:54268            |
| local_parking: Property 1=Focused                          | 3797:54271  | local_parking                    | 3797:54268            |
| local_parking: Property 1=Hovred                           | 3797:54269  | local_parking                    | 3797:54268            |
| local_shipping: Property 1=Disable                         | 3838:102522 | local_shipping                   | 3838:100650           |
| local_shipping: Property 1=Enabled                         | 1065:6379   | local_shipping                   | 3838:100650           |
| local_shipping: Property 1=Focused                         | 3838:100653 | local_shipping                   | 3838:100650           |
| local_shipping: Property 1=Hovered                         | 3838:100651 | local_shipping                   | 3838:100650           |
| location_on: Property 1=Default                            | 4971:38656  | location_on                      | 4971:38657            |
| location_on: Property 1=Disable                            | 4971:38662  | location_on                      | 4971:38657            |
| location_on: Property 1=Focused                            | 4971:38660  | location_on                      | 4971:38657            |
| location_on: Property 1=Hovred                             | 4971:38658  | location_on                      | 4971:38657            |
| location_on: Property 1=Pressed                            | 4972:41322  | location_on                      | 4971:38657            |
| lock: Property 1=Disable                                   | 3838:102538 | lock                             | 3838:100842           |
| lock: Property 1=Enabled                                   | 1074:6381   | lock                             | 3838:100842           |
| lock: Property 1=Focused                                   | 3838:100845 | lock                             | 3838:100842           |
| lock: Property 1=Hovered                                   | 3838:100843 | lock                             | 3838:100842           |
| lock_open: Property 1=Disable                              | 3838:102540 | lock_open                        | 3838:100847           |
| lock_open: Property 1=Enabled                              | 1074:6378   | lock_open                        | 3838:100847           |
| lock_open: Property 1=Focused                              | 3838:100850 | lock_open                        | 3838:100847           |
| lock_open: Property 1=Hovered                              | 3838:100848 | lock_open                        | 3838:100847           |
| logout: Property 1=Default                                 | 4225:36209  | logout                           | 4225:36210            |
| logout: Property 1=Disable                                 | 4225:36215  | logout                           | 4225:36210            |
| logout: Property 1=Focused                                 | 4225:36213  | logout                           | 4225:36210            |
| logout: Property 1=Hovred                                  | 4225:36211  | logout                           | 4225:36210            |
| Manual operation: Property 1=Default                       | 4822:37874  | Manual operation                 | 4822:37875            |
| Manual operation: Property 1=Variant2                      | 4822:37876  | Manual operation                 | 4822:37875            |
| Manual operation: Property 1=Variant3                      | 4822:37886  | Manual operation                 | 4822:37875            |
| Manual operation: Property 1=Variant4                      | 4822:37896  | Manual operation                 | 4822:37875            |
| Mini icons: Property 1=Lane                                | 3769:48377  | Mini icons                       | 3838:103038           |
| Mini icons: Property 1=Pallet                              | 3769:48376  | Mini icons                       | 3838:103038           |
| Mini icons: Property 1=Rotate                              | 2838:20     | Mini icons                       | 3838:103038           |
| more_horiz: Property 1=Disable                             | 3838:102711 | more_horiz                       | 3838:102251           |
| more_horiz: Property 1=Enabled                             | 1609:8164   | more_horiz                       | 3838:102251           |
| more_horiz: Property 1=Focused                             | 3838:102254 | more_horiz                       | 3838:102251           |
| more_horiz: Property 1=Hovred                              | 3838:102252 | more_horiz                       | 3838:102251           |
| more_vert: Property 1=Disable                              | 3838:102709 | more_vert                        | 3838:102256           |
| more_vert: Property 1=Enabled                              | 1609:8165   | more_vert                        | 3838:102256           |
| more_vert: Property 1=Focused                              | 3838:102259 | more_vert                        | 3838:102256           |
| more_vert: Property 1=Hovred                               | 3838:102257 | more_vert                        | 3838:102256           |
| near_me_customized: Property 1=Disable                     | 3838:102743 | near_me_customized               | 3838:102727           |
| near_me_customized: Property 1=Enabled                     | 1074:6386   | near_me_customized               | 3838:102727           |
| near_me_customized: Property 1=Focused                     | 3838:102741 | near_me_customized               | 3838:102727           |
| near_me_customized: Property 1=Hovred                      | 3838:102728 | near_me_customized               | 3838:102727           |
| nearby: Property 1=Default                                 | 5374:224    | nearby                           | 5374:225              |
| nearby: Property 1=Disable                                 | 5374:232    | nearby                           | 5374:225              |
| nearby: Property 1=Focused                                 | 5374:230    | nearby                           | 5374:225              |
| nearby: Property 1=Hovred                                  | 5374:226    | nearby                           | 5374:225              |
| nearby: Property 1=Pressed                                 | 5374:228    | nearby                           | 5374:225              |
| notes: Property 1=Disable                                  | 3838:102725 | notes                            | 3838:102215           |
| notes: Property 1=Enabled                                  | 2705:938    | notes                            | 3838:102215           |
| notes: Property 1=Focused                                  | 3838:102218 | notes                            | 3838:102215           |
| notes: Property 1=Hovred                                   | 3838:102216 | notes                            | 3838:102215           |
| notifications: Property 1=Disable                          | 3838:102612 | notifications                    | 3838:102095           |
| notifications: Property 1=Enabled                          | 1257:8231   | notifications                    | 3838:102095           |
| notifications: Property 1=Focused                          | 3838:102117 | notifications                    | 3838:102095           |
| notifications: Property 1=Hovred                           | 3838:102096 | notifications                    | 3838:102095           |
| obstacle_customized: Property 1=Disable                    | 3838:103084 | obstacle_customized              | 3838:103079           |
| obstacle_customized: Property 1=Enabled                    | 1074:6390   | obstacle_customized              | 3838:103079           |
| obstacle_customized: Property 1=Focused                    | 3838:103082 | obstacle_customized              | 3838:103079           |
| obstacle_customized: Property 1=Hovred                     | 3838:103080 | obstacle_customized              | 3838:103079           |
| open_in_full: Property 1=Disable                           | 3838:102590 | open_in_full                     | 3838:102189           |
| open_in_full: Property 1=Enabled                           | 1473:9101   | open_in_full                     | 3838:102189           |
| open_in_full: Property 1=Focused                           | 3838:102192 | open_in_full                     | 3838:102189           |
| open_in_full: Property 1=Hovred                            | 3838:102190 | open_in_full                     | 3838:102189           |
| open_in_new: Property 1=Disable                            | 3838:102623 | open_in_new                      | 3838:102503           |
| open_in_new: Property 1=Enabled                            | 2730:1756   | open_in_new                      | 3838:102503           |
| open_in_new: Property 1=Focused                            | 3838:102506 | open_in_new                      | 3838:102503           |
| open_in_new: Property 1=Hovred                             | 3838:102504 | open_in_new                      | 3838:102503           |
| package_2: Property 1=Disable                              | 3838:102683 | package_2                        | 3838:102336           |
| package_2: Property 1=Enabled                              | 3645:23924  | package_2                        | 3838:102336           |
| package_2: Property 1=Focused                              | 3838:102339 | package_2                        | 3838:102336           |
| package_2: Property 1=Hovred                               | 3838:102337 | package_2                        | 3838:102336           |
| pan_tool_alt: Property 1=Disable                           | 3838:102592 | pan_tool_alt                     | 3838:102184           |
| pan_tool_alt: Property 1=Enabled                           | 1472:9098   | pan_tool_alt                     | 3838:102184           |
| pan_tool_alt: Property 1=Focused                           | 3838:102187 | pan_tool_alt                     | 3838:102184           |
| pan_tool_alt: Property 1=Hovred                            | 3838:102185 | pan_tool_alt                     | 3838:102184           |
| pause: Property 1=Disable                                  | 3838:102616 | pause                            | 3838:102085           |
| pause: Property 1=Enabled                                  | 1238:8183   | pause                            | 3838:102085           |
| pause: Property 1=Focused                                  | 3838:102088 | pause                            | 3838:102085           |
| pause: Property 1=Hovred                                   | 3838:102086 | pause                            | 3838:102085           |
| pause_circle: Property 1=Default                           | 4181:36468  | pause_circle                     | 4181:36476            |
| pause_circle: Property 1=Disable                           | 4181:36481  | pause_circle                     | 4181:36476            |
| pause_circle: Property 1=Focused                           | 4181:36479  | pause_circle                     | 4181:36476            |
| pause_circle: Property 1=Hovred                            | 4181:36477  | pause_circle                     | 4181:36476            |
| person_add: Property 1=Disable                             | 3838:102691 | person_add                       | 3838:102313           |
| person_add: Property 1=Enabled                             | 1683:8229   | person_add                       | 3838:102313           |
| person_add: Property 1=Focused                             | 3838:102316 | person_add                       | 3838:102313           |
| person_add: Property 1=Hovred                              | 3838:102314 | person_add                       | 3838:102313           |
| Pivot: Property 1=Default                                  | 5386:27093  | Pivot                            | 5386:27094            |
| Pivot: Property 1=Variant2                                 | 5386:27095  | Pivot                            | 5386:27094            |
| Pivot: Property 1=Variant3                                 | 5386:27097  | Pivot                            | 5386:27094            |
| Pivot: Property 1=Variant4                                 | 5386:27099  | Pivot                            | 5386:27094            |
| play_arrow: Property 1=Disable                             | 3838:102618 | play_arrow                       | 3838:102080           |
| play_arrow: Property 1=Enabled                             | 1238:8182   | play_arrow                       | 3838:102080           |
| play_arrow: Property 1=Focused                             | 3838:102083 | play_arrow                       | 3838:102080           |
| play_arrow: Property 1=Hovred                              | 3838:102081 | play_arrow                       | 3838:102080           |
| Preferences custom: Property 1=Disable                     | 3838:102980 | Preferences custom               | 3838:102885           |
| Preferences custom: Property 1=Enabled                     | 3376:20944  | Preferences custom               | 3838:102885           |
| Preferences custom: Property 1=Focused                     | 3838:102899 | Preferences custom               | 3838:102885           |
| Preferences custom: Property 1=Hovred                      | 3838:102886 | Preferences custom               | 3838:102885           |
| quick_reorder: Property 1=Disable                          | 3948:34905  | quick_reorder                    | 3948:34900            |
| quick_reorder: Property 1=Enabled                          | 3948:34899  | quick_reorder                    | 3948:34900            |
| quick_reorder: Property 1=Focused                          | 3948:34903  | quick_reorder                    | 3948:34900            |
| quick_reorder: Property 1=Hovred                           | 3948:34901  | quick_reorder                    | 3948:34900            |
| remove: Property 1=Disable                                 | 3838:102536 | remove                           | 3838:100746           |
| remove: Property 1=Enabled                                 | 1074:6383   | remove                           | 3838:100746           |
| remove: Property 1=Focused                                 | 3838:100769 | remove                           | 3838:100746           |
| remove: Property 1=Hovered                                 | 3838:100747 | remove                           | 3838:100746           |
| reply: Property 1=Disable                                  | 3838:102528 | reply                            | 3838:100665           |
| reply: Property 1=Enabled                                  | 1065:6382   | reply                            | 3838:100665           |
| reply: Property 1=Focused                                  | 3838:100668 | reply                            | 3838:100665           |
| reply: Property 1=Hovered                                  | 3838:100666 | reply                            | 3838:100665           |
| rotate_right: Property 1=Disable                           | 3838:102685 | rotate_right                     | 3838:102331           |
| rotate_right: Property 1=Enabled                           | 2824:49     | rotate_right                     | 3838:102331           |
| rotate_right: Property 1=Focused                           | 3838:102334 | rotate_right                     | 3838:102331           |
| rotate_right: Property 1=Hovred                            | 3838:102332 | rotate_right                     | 3838:102331           |
| Rotate2: Property 1=Disable                                | 3838:103268 | Rotate2                          | 3838:103204           |
| Rotate2: Property 1=Enabled                                | 2828:112    | Rotate2                          | 3838:103204           |
| Rotate2: Property 1=Focused                                | 3838:103265 | Rotate2                          | 3838:103204           |
| Rotate2: Property 1=Hovred                                 | 3838:103205 | Rotate2                          | 3838:103204           |
| search: Property 1=Disable                                 | 3838:102598 | search                           | 3838:102159           |
| search: Property 1=Enabled                                 | 1460:10360  | search                           | 3838:102159           |
| search: Property 1=Focused                                 | 3838:102164 | search                           | 3838:102159           |
| search: Property 1=Hovred                                  | 3838:102160 | search                           | 3838:102159           |
| search_off: Property 1=Disable                             | 3838:102713 | search_off                       | 3838:102246           |
| search_off: Property 1=Enabled                             | 1592:8459   | search_off                       | 3838:102246           |
| search_off: Property 1=Focused                             | 3838:102249 | search_off                       | 3838:102246           |
| search_off: Property 1=Hovred                              | 3838:102247 | search_off                       | 3838:102246           |
| settings: Property 1=Disable                               | 3838:102635 | settings                         | 3838:102473           |
| settings: Property 1=Enabled                               | 2631:258    | settings                         | 3838:102473           |
| settings: Property 1=Focused                               | 3838:102476 | settings                         | 3838:102473           |
| settings: Property 1=Hovred                                | 3838:102474 | settings                         | 3838:102473           |
| shelves: Property 1=Disable                                | 3838:102518 | shelves                          | 3838:100640           |
| shelves: Property 1=Enabled                                | 1065:6376   | shelves                          | 3838:100640           |
| shelves: Property 1=Focused                                | 3838:100643 | shelves                          | 3838:100640           |
| shelves: Property 1=Hovered                                | 3838:100641 | shelves                          | 3838:100640           |
| signpost: Property 1=Disable                               | 3838:102663 | signpost                         | 3838:102399           |
| signpost: Property 1=Enabled                               | 2087:7925   | signpost                         | 3838:102399           |
| signpost: Property 1=Focused                               | 3838:102402 | signpost                         | 3838:102399           |
| signpost: Property 1=Hovred                                | 3838:102400 | signpost                         | 3838:102399           |
| smart_toy: Property 1=Disable                              | 3838:102633 | smart_toy                        | 3838:102478           |
| smart_toy: Property 1=Enabled                              | 2631:257    | smart_toy                        | 3838:102478           |
| smart_toy: Property 1=Focused                              | 3838:102481 | smart_toy                        | 3838:102478           |
| smart_toy: Property 1=Hovred                               | 3838:102479 | smart_toy                        | 3838:102478           |
| stacked_line_chart: Property 1=Default                     | 4802:37867  | stacked_line_chart               | 4802:37868            |
| stacked_line_chart: Property 1=Disable                     | 4802:37873  | stacked_line_chart               | 4802:37868            |
| stacked_line_chart: Property 1=Focused                     | 4802:37871  | stacked_line_chart               | 4802:37868            |
| stacked_line_chart: Property 1=Hovred                      | 4802:37869  | stacked_line_chart               | 4802:37868            |
| straighten: Property 1=Disable                             | 3838:102675 | straighten                       | 3838:102356           |
| straighten: Property 1=Enabled                             | 1797:8856   | straighten                       | 3838:102356           |
| straighten: Property 1=Focused                             | 3838:102372 | straighten                       | 3838:102356           |
| straighten: Property 1=Hovred                              | 3838:102357 | straighten                       | 3838:102356           |
| swipe_right_alt: Property 1=Disable                        | 3838:102526 | swipe_right_alt                  | 3838:100660           |
| swipe_right_alt: Property 1=Enabled                        | 1065:6381   | swipe_right_alt                  | 3838:100660           |
| swipe_right_alt: Property 1=Focused                        | 3838:100663 | swipe_right_alt                  | 3838:100660           |
| swipe_right_alt: Property 1=Hovered                        | 3838:100661 | swipe_right_alt                  | 3838:100660           |
| sync: Property 1=Disable                                   | 3838:102671 | sync                             | 3838:102379           |
| sync: Property 1=Enabled                                   | 1899:8858   | sync                             | 3838:102379           |
| sync: Property 1=Focused                                   | 3838:102382 | sync                             | 3838:102379           |
| sync: Property 1=Hovred                                    | 3838:102380 | sync                             | 3838:102379           |
| task_alt: Property 1=Disable                               | 3838:102556 | task_alt                         | 3838:101714           |
| task_alt: Property 1=Enabled                               | 1118:7740   | task_alt                         | 3838:101714           |
| task_alt: Property 1=Focused                               | 3838:101718 | task_alt                         | 3838:101714           |
| task_alt: Property 1=Hovred                                | 3838:101715 | task_alt                         | 3838:101714           |
| team_dashboard 1: Property 1=Default                       | 4342:39200  | team_dashboard 1                 | 4342:39201            |
| team_dashboard 1: Property 1=Disable                       | 4342:39206  | team_dashboard 1                 | 4342:39201            |
| team_dashboard 1: Property 1=Focused                       | 4342:39204  | team_dashboard 1                 | 4342:39201            |
| team_dashboard 1: Property 1=Hovred                        | 4342:39202  | team_dashboard 1                 | 4342:39201            |
| test more icon: Property 1=Disable                         | 3838:103198 | test more icon                   | 3838:103185           |
| test more icon: Property 1=Enabled                         | 2669:19     | test more icon                   | 3838:103185           |
| test more icon: Property 1=Focused                         | 3838:103192 | test more icon                   | 3838:103185           |
| test more icon: Property 1=Hovred                          | 3838:103186 | test more icon                   | 3838:103185           |
| translate: Property 1=Default                              | 4228:36195  | translate                        | 4228:36196            |
| translate: Property 1=Disable                              | 4228:36201  | translate                        | 4228:36196            |
| translate: Property 1=Focused                              | 4228:36199  | translate                        | 4228:36196            |
| translate: Property 1=Hovred                               | 4228:36197  | translate                        | 4228:36196            |
| upload_file: Property 1=Disable                            | 3838:102677 | upload_file                      | 3838:102351           |
| upload_file: Property 1=Enabled                            | 1771:8372   | upload_file                      | 3838:102351           |
| upload_file: Property 1=Focused                            | 3838:102354 | upload_file                      | 3838:102351           |
| upload_file: Property 1=Hovred                             | 3838:102352 | upload_file                      | 3838:102351           |
| Vehicle models large: Property 1=CB18                      | 2453:1744   | Vehicle models large             | 2453:1750             |
| Vehicle models large: Property 1=CDI                       | 2453:1742   | Vehicle models large             | 2453:1750             |
| Vehicle models large: Property 1=Charm                     | 2453:1748   | Vehicle models large             | 2453:1750             |
| Vehicle models large: Property 1=Raymond                   | 2453:1747   | Vehicle models large             | 2453:1750             |
| Vehicle models large: Property 1=REA160                    | 2453:1749   | Vehicle models large             | 2453:1750             |
| Vehicle models large: Property 1=REA250                    | 2453:1743   | Vehicle models large             | 2453:1750             |
| Vehicle models large: Property 1=SAE160_1200               | 2453:1745   | Vehicle models large             | 2453:1750             |
| Vehicle models large: Property 1=SAE160_1600               | 2453:1746   | Vehicle models large             | 2453:1750             |
| Vertical: Property 1=Disable                               | 3838:103181 | Vertical                         | 3838:103172           |
| Vertical: Property 1=Enabled                               | 2618:2802   | Vertical                         | 3838:103172           |
| Vertical: Property 1=Focused                               | 3838:103177 | Vertical                         | 3838:103172           |
| Vertical: Property 1=Hovred                                | 3838:103173 | Vertical                         | 3838:103172           |
| vertical_distribute: Property 1=Disable                    | 3838:102717 | vertical_distribute              | 3838:102236           |
| vertical_distribute: Property 1=Enabled                    | 1534:9407   | vertical_distribute              | 3838:102236           |
| vertical_distribute: Property 1=Focused                    | 3838:102239 | vertical_distribute              | 3838:102236           |
| vertical_distribute: Property 1=Hovred                     | 3838:102237 | vertical_distribute              | 3838:102236           |
| view_compact: Property 1=Disable                           | 3838:102580 | view_compact                     | 3838:102052           |
| view_compact: Property 1=Enabled                           | 1230:9086   | view_compact                     | 3838:102052           |
| view_compact: Property 1=Focused                           | 3838:102055 | view_compact                     | 3838:102052           |
| view_compact: Property 1=Hovred                            | 3838:102053 | view_compact                     | 3838:102052           |
| view_in_ar: Property 1=Disable                             | 3838:102576 | view_in_ar                       | 3838:102042           |
| view_in_ar: Property 1=Enabled                             | 1226:8694   | view_in_ar                       | 3838:102042           |
| view_in_ar: Property 1=Focused                             | 3838:102045 | view_in_ar                       | 3838:102042           |
| view_in_ar: Property 1=Hovred                              | 3838:102043 | view_in_ar                       | 3838:102042           |
| view_list: Property 1=Disable                              | 3838:102703 | view_list                        | 3838:102271           |
| view_list: Property 1=Enabled                              | 1618:8196   | view_list                        | 3838:102271           |
| view_list: Property 1=Focused                              | 3838:102274 | view_list                        | 3838:102271           |
| view_list: Property 1=Hovred                               | 3838:102272 | view_list                        | 3838:102271           |
| view_module: Property 1=Disable                            | 3838:102582 | view_module                      | 3838:102057           |
| view_module: Property 1=Enabled                            | 1230:9087   | view_module                      | 3838:102057           |
| view_module: Property 1=Focused                            | 3838:102060 | view_module                      | 3838:102057           |
| view_module: Property 1=Hovred                             | 3838:102058 | view_module                      | 3838:102057           |
| visibility: Property 1=Disable                             | 3838:102542 | visibility                       | 3838:100852           |
| visibility: Property 1=Enabled                             | 1074:6380   | visibility                       | 3838:100852           |
| visibility: Property 1=Focused                             | 3838:100855 | visibility                       | 3838:100852           |
| visibility: Property 1=Hovered                             | 3838:100853 | visibility                       | 3838:100852           |
| visibility_off: Property 1=Disable                         | 3838:102544 | visibility_off                   | 3838:100857           |
| visibility_off: Property 1=Enabled                         | 1074:6379   | visibility_off                   | 3838:100857           |
| visibility_off: Property 1=Focused                         | 3838:100860 | visibility_off                   | 3838:100857           |
| visibility_off: Property 1=Hovered                         | 3838:100858 | visibility_off                   | 3838:100857           |
| wall_customized: Property 1=Disable                        | 3838:103077 | wall_customized                  | 3838:103049           |
| wall_customized: Property 1=Enabled                        | 1074:6389   | wall_customized                  | 3838:103049           |
| wall_customized: Property 1=Focused                        | 3838:103075 | wall_customized                  | 3838:103049           |
| wall_customized: Property 1=Hovred                         | 3838:103050 | wall_customized                  | 3838:103049           |
| warning: Property 1=Disable                                | 3838:102550 | warning                          | 3838:101678           |
| warning: Property 1=Enabled                                | 1074:6375   | warning                          | 3838:101678           |
| warning: Property 1=Focused                                | 3838:101691 | warning                          | 3838:101678           |
| warning: Property 1=Hovred                                 | 3838:101679 | warning                          | 3838:101678           |
| wifi: Property 1=Default                                   | 4225:36189  | wifi                             | 4225:36190            |
| wifi: Property 1=Disable                                   | 4225:36195  | wifi                             | 4225:36190            |
| wifi: Property 1=Focused                                   | 4225:36193  | wifi                             | 4225:36190            |
| wifi: Property 1=Hovred                                    | 4225:36191  | wifi                             | 4225:36190            |
| zoom_in: Property 1=Disable                                | 3838:102596 | zoom_in                          | 3838:102174           |
| zoom_in: Property 1=Enabled                                | 1472:9096   | zoom_in                          | 3838:102174           |
| zoom_in: Property 1=Focused                                | 3838:102177 | zoom_in                          | 3838:102174           |
| zoom_in: Property 1=Hovred                                 | 3838:102175 | zoom_in                          | 3838:102174           |
| zoom_out: Property 1=Disable                               | 3838:102594 | zoom_out                         | 3838:102179           |
| zoom_out: Property 1=Enabled                               | 1472:9097   | zoom_out                         | 3838:102179           |
| zoom_out: Property 1=Focused                               | 3838:102182 | zoom_out                         | 3838:102179           |
| zoom_out: Property 1=Hovred                                | 3838:102180 | zoom_out                         | 3838:102179           |
| zoom_out_map: State=Disable                                | 3838:102532 | zoom_out_map                     | 3838:100675           |
| zoom_out_map: State=Enabled                                | 1065:6390   | zoom_out_map                     | 3838:100675           |
| zoom_out_map: State=Focused                                | 3838:100736 | zoom_out_map                     | 3838:100675           |
| zoom_out_map: State=Hovered                                | 3838:100676 | zoom_out_map                     | 3838:100675           |
