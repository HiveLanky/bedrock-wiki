if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.566dfb65.js",revision:null},{url:"assets/404.md.566dfb65.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.2e3cb4c3.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.2e3cb4c3.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.5c84c67b.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.5c84c67b.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.70ef3138.js",revision:null},{url:"assets/animation-controllers_death-commands.md.70ef3138.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.1a31370a.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.1a31370a.lean.js",revision:null},{url:"assets/animation-controllers_index.md.51676875.js",revision:null},{url:"assets/animation-controllers_index.md.51676875.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.361fc0cf.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.361fc0cf.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.9b458542.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.9b458542.lean.js",revision:null},{url:"assets/app.67c03043.js",revision:null},{url:"assets/blocks_applying-effects.md.60faec6b.js",revision:null},{url:"assets/blocks_applying-effects.md.60faec6b.lean.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.89b9372f.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.89b9372f.lean.js",revision:null},{url:"assets/blocks_block-components.md.d242b4bc.js",revision:null},{url:"assets/blocks_block-components.md.d242b4bc.lean.js",revision:null},{url:"assets/blocks_block-events.md.719e8854.js",revision:null},{url:"assets/blocks_block-events.md.719e8854.lean.js",revision:null},{url:"assets/blocks_block-permutations.md.effcccc4.js",revision:null},{url:"assets/blocks_block-permutations.md.effcccc4.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.b22146d0.js",revision:null},{url:"assets/blocks_block-shapes.md.b22146d0.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.b6eb1dfc.js",revision:null},{url:"assets/blocks_block-sounds.md.b6eb1dfc.lean.js",revision:null},{url:"assets/blocks_block-states.md.7e5f3893.js",revision:null},{url:"assets/blocks_block-states.md.7e5f3893.lean.js",revision:null},{url:"assets/blocks_block-tags.md.f7faee8d.js",revision:null},{url:"assets/blocks_block-tags.md.f7faee8d.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.a85372cc.js",revision:null},{url:"assets/blocks_block-texture-variation.md.a85372cc.lean.js",revision:null},{url:"assets/blocks_block-traits.md.071b1e67.js",revision:null},{url:"assets/blocks_block-traits.md.071b1e67.lean.js",revision:null},{url:"assets/blocks_blocks-experimental.md.5ee5e4e5.js",revision:null},{url:"assets/blocks_blocks-experimental.md.5ee5e4e5.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.e7458d9c.js",revision:null},{url:"assets/blocks_blocks-intro.md.e7458d9c.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.cac31f50.js",revision:null},{url:"assets/blocks_custom-crops.md.cac31f50.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.aca21483.js",revision:null},{url:"assets/blocks_custom-fluids.md.aca21483.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.93a30768.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.93a30768.lean.js",revision:null},{url:"assets/blocks_custom-slabs.md.0bb1b0fb.js",revision:null},{url:"assets/blocks_custom-slabs.md.0bb1b0fb.lean.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.b84eb806.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.b84eb806.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.0f91c5ab.js",revision:null},{url:"assets/blocks_custom-trees.md.0f91c5ab.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.b1147fad.js",revision:null},{url:"assets/blocks_fake-blocks.md.b1147fad.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.0da791ab.js",revision:null},{url:"assets/blocks_flipbook-textures.md.0da791ab.lean.js",revision:null},{url:"assets/blocks_index.md.38d8c7b5.js",revision:null},{url:"assets/blocks_index.md.38d8c7b5.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.9662fb76.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.9662fb76.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.0d5973f4.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.0d5973f4.lean.js",revision:null},{url:"assets/blocks_precise-interaction.md.2435b711.js",revision:null},{url:"assets/blocks_precise-interaction.md.2435b711.lean.js",revision:null},{url:"assets/blocks_precise-rotation.md.5d969c19.js",revision:null},{url:"assets/blocks_precise-rotation.md.5d969c19.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.24aa17f9.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.24aa17f9.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.750e926c.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.750e926c.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.e886f9a8.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.6944defc.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.4ba69c0e.js",revision:null},{url:"assets/commands_block-states.md.4ba69c0e.lean.js",revision:null},{url:"assets/commands_damage.md.04389aad.js",revision:null},{url:"assets/commands_damage.md.04389aad.lean.js",revision:null},{url:"assets/commands_entity-counter.md.1770fa58.js",revision:null},{url:"assets/commands_entity-counter.md.1770fa58.lean.js",revision:null},{url:"assets/commands_index.md.3ef6a0f0.js",revision:null},{url:"assets/commands_index.md.3ef6a0f0.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.7f360d46.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.7f360d46.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.a97f89d8.js",revision:null},{url:"assets/commands_mcfunctions.md.a97f89d8.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.0af6ba6d.js",revision:null},{url:"assets/commands_nbt-commands.md.0af6ba6d.lean.js",revision:null},{url:"assets/commands_new-execute.md.29bbdd5e.js",revision:null},{url:"assets/commands_new-execute.md.29bbdd5e.lean.js",revision:null},{url:"assets/commands_on-first-join.md.2c2dcb43.js",revision:null},{url:"assets/commands_on-first-join.md.2c2dcb43.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.60c4db3a.js",revision:null},{url:"assets/commands_on-first-world-load.md.60c4db3a.lean.js",revision:null},{url:"assets/commands_on-player-death.md.af2e26db.js",revision:null},{url:"assets/commands_on-player-death.md.af2e26db.lean.js",revision:null},{url:"assets/commands_on-player-join.md.275ed6e3.js",revision:null},{url:"assets/commands_on-player-join.md.275ed6e3.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.61fd6c53.js",revision:null},{url:"assets/commands_on-player-leave.md.61fd6c53.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.5e5f3b44.js",revision:null},{url:"assets/commands_on-player-respawn.md.5e5f3b44.lean.js",revision:null},{url:"assets/commands_playsound.md.5ea1c683.js",revision:null},{url:"assets/commands_playsound.md.5ea1c683.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.ff8b811d.js",revision:null},{url:"assets/commands_relative-coordinates.md.ff8b811d.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.ad314a0b.js",revision:null},{url:"assets/commands_scoreboard-operations.md.ad314a0b.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.394b1ea0.js",revision:null},{url:"assets/commands_scoreboard-timers.md.394b1ea0.lean.js",revision:null},{url:"assets/commands_selectors.md.2f02b722.js",revision:null},{url:"assets/commands_selectors.md.2f02b722.lean.js",revision:null},{url:"assets/commands_tellraw.md.d392cf0a.js",revision:null},{url:"assets/commands_tellraw.md.d392cf0a.lean.js",revision:null},{url:"assets/concepts_contents.md.5bef8d29.js",revision:null},{url:"assets/concepts_contents.md.5bef8d29.lean.js",revision:null},{url:"assets/concepts_emojis.md.a49aaf40.js",revision:null},{url:"assets/concepts_emojis.md.a49aaf40.lean.js",revision:null},{url:"assets/concepts_index.md.faecbfed.js",revision:null},{url:"assets/concepts_index.md.faecbfed.lean.js",revision:null},{url:"assets/concepts_molang.md.04bdbfae.js",revision:null},{url:"assets/concepts_molang.md.04bdbfae.lean.js",revision:null},{url:"assets/concepts_namespaces.md.8e24e214.js",revision:null},{url:"assets/concepts_namespaces.md.8e24e214.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.7db68e8d.js",revision:null},{url:"assets/concepts_overwriting-assets.md.7db68e8d.lean.js",revision:null},{url:"assets/concepts_shaders.md.51dec5d2.js",revision:null},{url:"assets/concepts_shaders.md.51dec5d2.lean.js",revision:null},{url:"assets/concepts_sounds.md.324495fb.js",revision:null},{url:"assets/concepts_sounds.md.324495fb.lean.js",revision:null},{url:"assets/concepts_subpacks.md.15ae893d.js",revision:null},{url:"assets/concepts_subpacks.md.15ae893d.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.d2794381.js",revision:null},{url:"assets/concepts_text-and-translations.md.d2794381.lean.js",revision:null},{url:"assets/concepts_textures-list.md.d3083cb3.js",revision:null},{url:"assets/concepts_textures-list.md.d3083cb3.lean.js",revision:null},{url:"assets/contribute-how-to.md.2c1d9c34.js",revision:null},{url:"assets/contribute-how-to.md.2c1d9c34.lean.js",revision:null},{url:"assets/contribute-style.md.7042fd49.js",revision:null},{url:"assets/contribute-style.md.7042fd49.lean.js",revision:null},{url:"assets/contribute.md.213a58b4.js",revision:null},{url:"assets/contribute.md.213a58b4.lean.js",revision:null},{url:"assets/discord.md.dd1cafa8.js",revision:null},{url:"assets/discord.md.dd1cafa8.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.649afb6c.js",revision:null},{url:"assets/documentation_advanced-molang.md.649afb6c.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.58fc04c0.js",revision:null},{url:"assets/documentation_creative-categories.md.58fc04c0.lean.js",revision:null},{url:"assets/documentation_file-types.md.c5d00fa9.js",revision:null},{url:"assets/documentation_file-types.md.c5d00fa9.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.9b0ef729.js",revision:null},{url:"assets/documentation_fog-ids.md.9b0ef729.lean.js",revision:null},{url:"assets/documentation_index.md.4fb82757.js",revision:null},{url:"assets/documentation_index.md.4fb82757.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.8964adbe.js",revision:null},{url:"assets/documentation_material-config-description.md.8964adbe.lean.js",revision:null},{url:"assets/documentation_materials.md.9f720b8e.js",revision:null},{url:"assets/documentation_materials.md.9f720b8e.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.e5a0e14e.js",revision:null},{url:"assets/documentation_pack-structure.md.e5a0e14e.lean.js",revision:null},{url:"assets/documentation_projectiles.md.3843f08e.js",revision:null},{url:"assets/documentation_projectiles.md.3843f08e.lean.js",revision:null},{url:"assets/documentation_queries.md.06d5f149.js",revision:null},{url:"assets/documentation_queries.md.06d5f149.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.3c1311b4.js",revision:null},{url:"assets/documentation_shared-constructs.md.3c1311b4.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.12400eae.js",revision:null},{url:"assets/documentation_sound-definitions.md.12400eae.lean.js",revision:null},{url:"assets/entities_boat-entities.md.9a5d064d.js",revision:null},{url:"assets/entities_boat-entities.md.9a5d064d.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.5f6c67a6.js",revision:null},{url:"assets/entities_detecting-other-entities.md.5f6c67a6.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.61e6c48c.js",revision:null},{url:"assets/entities_disabling-team-damage.md.61e6c48c.lean.js",revision:null},{url:"assets/entities_dummy-components.md.c20f8e1d.js",revision:null},{url:"assets/entities_dummy-components.md.c20f8e1d.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.61ce18cc.js",revision:null},{url:"assets/entities_dummy-entities.md.61ce18cc.lean.js",revision:null},{url:"assets/entities_entity-attack.md.ca6a56b2.js",revision:null},{url:"assets/entities_entity-attack.md.ca6a56b2.lean.js",revision:null},{url:"assets/entities_entity-events.md.a43e7318.js",revision:null},{url:"assets/entities_entity-events.md.a43e7318.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.55539633.js",revision:null},{url:"assets/entities_entity-holds-item.md.55539633.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.34a91105.js",revision:null},{url:"assets/entities_entity-intro-bp.md.34a91105.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.10b2373a.js",revision:null},{url:"assets/entities_entity-intro-rp.md.10b2373a.lean.js",revision:null},{url:"assets/entities_entity-movement.md.593dedcc.js",revision:null},{url:"assets/entities_entity-movement.md.593dedcc.lean.js",revision:null},{url:"assets/entities_entity-properties.md.65648ab7.js",revision:null},{url:"assets/entities_entity-properties.md.65648ab7.lean.js",revision:null},{url:"assets/entities_flying-entities.md.b72547a0.js",revision:null},{url:"assets/entities_flying-entities.md.b72547a0.lean.js",revision:null},{url:"assets/entities_index.md.f463e7c6.js",revision:null},{url:"assets/entities_index.md.f463e7c6.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.5a00c353.js",revision:null},{url:"assets/entities_introduction-to-aec.md.5a00c353.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.6b82d6cc.js",revision:null},{url:"assets/entities_invulnerable-entities.md.6b82d6cc.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.d04105e0.js",revision:null},{url:"assets/entities_look-at-entity.md.d04105e0.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.b65e2062.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.b65e2062.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.85a5a85a.js",revision:null},{url:"assets/entities_npc-dialogs.md.85a5a85a.lean.js",revision:null},{url:"assets/entities_render-controllers.md.5be51cd1.js",revision:null},{url:"assets/entities_render-controllers.md.5be51cd1.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.49acd689.js",revision:null},{url:"assets/entities_runtime-identifier.md.49acd689.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.2a4f43cc.js",revision:null},{url:"assets/entities_sleeping-entities.md.2a4f43cc.lean.js",revision:null},{url:"assets/entities_solid-entities.md.87e6311a.js",revision:null},{url:"assets/entities_solid-entities.md.87e6311a.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.05639b9e.js",revision:null},{url:"assets/entities_spawn-rules.md.05639b9e.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.abe11302.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.abe11302.lean.js",revision:null},{url:"assets/entities_timers.md.e9f0192b.js",revision:null},{url:"assets/entities_timers.md.e9f0192b.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.6db6af97.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.6db6af97.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.cc2d0e8f.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.cc2d0e8f.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.6bacce53.js",revision:null},{url:"assets/entities_village-mechanic.md.6bacce53.lean.js",revision:null},{url:"assets/entities_vuc-full.md.b4017c77.lean.js",revision:null},{url:"assets/entities_vusr-full.md.0ad2c67a.js",revision:null},{url:"assets/entities_vusr-full.md.0ad2c67a.lean.js",revision:null},{url:"assets/graph-test.md.8bb1190f.js",revision:null},{url:"assets/graph-test.md.8bb1190f.lean.js",revision:null},{url:"assets/guide_addons.md.d397edf8.js",revision:null},{url:"assets/guide_addons.md.d397edf8.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.ac7fd087.js",revision:null},{url:"assets/guide_advancedmanifest.md.ac7fd087.lean.js",revision:null},{url:"assets/guide_blockbench.md.6709301e.js",revision:null},{url:"assets/guide_blockbench.md.6709301e.lean.js",revision:null},{url:"assets/guide_custom-entity.md.7af9c425.js",revision:null},{url:"assets/guide_custom-entity.md.7af9c425.lean.js",revision:null},{url:"assets/guide_custom-item.md.c1ef7075.js",revision:null},{url:"assets/guide_custom-item.md.c1ef7075.lean.js",revision:null},{url:"assets/guide_download-packs.md.29ed3ff8.js",revision:null},{url:"assets/guide_download-packs.md.29ed3ff8.lean.js",revision:null},{url:"assets/guide_format-version.md.ca921843.js",revision:null},{url:"assets/guide_format-version.md.ca921843.lean.js",revision:null},{url:"assets/guide_index.md.567c17b3.js",revision:null},{url:"assets/guide_index.md.567c17b3.lean.js",revision:null},{url:"assets/guide_introduction.md.32b3f933.js",revision:null},{url:"assets/guide_introduction.md.32b3f933.lean.js",revision:null},{url:"assets/guide_loot-table.md.60cfb55c.js",revision:null},{url:"assets/guide_loot-table.md.60cfb55c.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.5e2161a7.js",revision:null},{url:"assets/guide_project-setup-android.md.5e2161a7.lean.js",revision:null},{url:"assets/guide_project-setup.md.0275f0cd.js",revision:null},{url:"assets/guide_project-setup.md.0275f0cd.lean.js",revision:null},{url:"assets/guide_software-preparation.md.b35489e3.js",revision:null},{url:"assets/guide_software-preparation.md.b35489e3.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.bbd37a7a.js",revision:null},{url:"assets/guide_troubleshooting.md.bbd37a7a.lean.js",revision:null},{url:"assets/guide_understanding-json.md.ba9f9190.js",revision:null},{url:"assets/guide_understanding-json.md.ba9f9190.lean.js",revision:null},{url:"assets/hacktoberfest.md.a361181e.js",revision:null},{url:"assets/hacktoberfest.md.a361181e.lean.js",revision:null},{url:"assets/index.md.fb05d9b6.js",revision:null},{url:"assets/index.md.fb05d9b6.lean.js",revision:null},{url:"assets/items_attachables.md.9670ab8a.js",revision:null},{url:"assets/items_attachables.md.9670ab8a.lean.js",revision:null},{url:"assets/items_custom-armor.md.d23c8509.js",revision:null},{url:"assets/items_custom-armor.md.d23c8509.lean.js",revision:null},{url:"assets/items_custom-weapon.md.dcd1a963.js",revision:null},{url:"assets/items_custom-weapon.md.dcd1a963.lean.js",revision:null},{url:"assets/items_enchantments.md.0f94e464.js",revision:null},{url:"assets/items_enchantments.md.0f94e464.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.e5ac430c.js",revision:null},{url:"assets/items_equipped-item-commands.md.e5ac430c.lean.js",revision:null},{url:"assets/items_index.md.a70ca828.js",revision:null},{url:"assets/items_index.md.a70ca828.lean.js",revision:null},{url:"assets/items_item-identifiers.md.1d51ffa4.js",revision:null},{url:"assets/items_item-identifiers.md.1d51ffa4.lean.js",revision:null},{url:"assets/items_items-16.md.7bfa7f2e.js",revision:null},{url:"assets/items_items-16.md.7bfa7f2e.lean.js",revision:null},{url:"assets/items_items-intro.md.ddd501bb.js",revision:null},{url:"assets/items_items-intro.md.ddd501bb.lean.js",revision:null},{url:"assets/items_numerical-item-ids.md.45fe7c7d.js",revision:null},{url:"assets/items_numerical-item-ids.md.45fe7c7d.lean.js",revision:null},{url:"assets/items_spawning-items.md.9f3afa83.js",revision:null},{url:"assets/items_spawning-items.md.9f3afa83.lean.js",revision:null},{url:"assets/items_spear.md.d7a324ad.js",revision:null},{url:"assets/items_spear.md.d7a324ad.lean.js",revision:null},{url:"assets/items_throwable.md.3e2a0b34.js",revision:null},{url:"assets/items_throwable.md.3e2a0b34.lean.js",revision:null},{url:"assets/items_tool-durability.md.7b9611a7.js",revision:null},{url:"assets/items_tool-durability.md.7b9611a7.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.53d4ac04.js",revision:null},{url:"assets/items_troubleshooting-items.md.53d4ac04.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.72df0c70.js",revision:null},{url:"assets/items_vanilla-usage-items.md.72df0c70.lean.js",revision:null},{url:"assets/items_vui-full.md.f64615ed.js",revision:null},{url:"assets/items_vui-full.md.f64615ed.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.e58fa2cb.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.e58fa2cb.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.d40d3610.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.d40d3610.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.752b8e7f.js",revision:null},{url:"assets/json-ui_best-practices.md.752b8e7f.lean.js",revision:null},{url:"assets/json-ui_index.md.3cb4d635.js",revision:null},{url:"assets/json-ui_index.md.3cb4d635.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.bfdec1e5.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.bfdec1e5.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.91fbe2a9.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.91fbe2a9.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.33e9a427.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.33e9a427.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.cbeb6e70.js",revision:null},{url:"assets/json-ui_string-to-number.md.cbeb6e70.lean.js",revision:null},{url:"assets/loot_index.md.30f1cca5.js",revision:null},{url:"assets/loot_index.md.30f1cca5.lean.js",revision:null},{url:"assets/loot_item-functions.md.495dbaf7.js",revision:null},{url:"assets/loot_item-functions.md.495dbaf7.lean.js",revision:null},{url:"assets/loot_loot-tables.md.d166159c.js",revision:null},{url:"assets/loot_loot-tables.md.d166159c.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.f58d4f27.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.f58d4f27.lean.js",revision:null},{url:"assets/loot_recipes.md.7f49b610.js",revision:null},{url:"assets/loot_recipes.md.7f49b610.lean.js",revision:null},{url:"assets/loot_trade-tables.md.26471287.js",revision:null},{url:"assets/loot_trade-tables.md.26471287.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.504c9bc9.js",revision:null},{url:"assets/loot_trading-behavior.md.504c9bc9.lean.js",revision:null},{url:"assets/meta_addon-performance.md.3468679c.js",revision:null},{url:"assets/meta_addon-performance.md.3468679c.lean.js",revision:null},{url:"assets/meta_index.md.37ecd162.js",revision:null},{url:"assets/meta_index.md.37ecd162.lean.js",revision:null},{url:"assets/meta_jq.md.cf80f703.js",revision:null},{url:"assets/meta_jq.md.cf80f703.lean.js",revision:null},{url:"assets/meta_style-guide.md.5482adc6.js",revision:null},{url:"assets/meta_style-guide.md.5482adc6.lean.js",revision:null},{url:"assets/meta_useful-links.md.c8239738.js",revision:null},{url:"assets/meta_useful-links.md.c8239738.lean.js",revision:null},{url:"assets/meta_using-schemas.md.035754a6.js",revision:null},{url:"assets/meta_using-schemas.md.035754a6.lean.js",revision:null},{url:"assets/meta_version-control.md.e7c7c3bc.js",revision:null},{url:"assets/meta_version-control.md.e7c7c3bc.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.83bbfe78.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.83bbfe78.lean.js",revision:null},{url:"assets/nbt_index.md.75319a90.js",revision:null},{url:"assets/nbt_index.md.75319a90.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.0e8f5969.js",revision:null},{url:"assets/nbt_mcstructure.md.0e8f5969.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.363d4630.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.363d4630.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.b815ab55.js",revision:null},{url:"assets/nbt_step-by-step-example.md.b815ab55.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.4f3b3db6.js",revision:null},{url:"assets/nbt_structure-limits.md.4f3b3db6.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.59d7a024.js",revision:null},{url:"assets/particles_disabling-particles.md.59d7a024.lean.js",revision:null},{url:"assets/particles_index.md.0530bdfd.js",revision:null},{url:"assets/particles_index.md.0530bdfd.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.3144035a.js",revision:null},{url:"assets/particles_particles-and-sounds.md.3144035a.lean.js",revision:null},{url:"assets/particles_particles.md.3910d2d6.js",revision:null},{url:"assets/particles_particles.md.3910d2d6.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.0c36aa9b.js",revision:null},{url:"assets/particles_vanilla-particles.md.0c36aa9b.lean.js",revision:null},{url:"assets/privacy.md.9b5b3ede.js",revision:null},{url:"assets/privacy.md.9b5b3ede.lean.js",revision:null},{url:"assets/scripting_api-environment.md.9d18380c.js",revision:null},{url:"assets/scripting_api-environment.md.9d18380c.lean.js",revision:null},{url:"assets/scripting_custom-command.md.52ad7940.js",revision:null},{url:"assets/scripting_custom-command.md.52ad7940.lean.js",revision:null},{url:"assets/scripting_game-tests.md.02282ef5.js",revision:null},{url:"assets/scripting_game-tests.md.02282ef5.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.055fb2dc.js",revision:null},{url:"assets/scripting_gametest-form.md.055fb2dc.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.f6d3e4e2.js",revision:null},{url:"assets/scripting_gametest-qna.md.f6d3e4e2.lean.js",revision:null},{url:"assets/scripting_index.md.c721b7ae.js",revision:null},{url:"assets/scripting_index.md.c721b7ae.lean.js",revision:null},{url:"assets/scripting_placement-prevention.md.4f86a805.js",revision:null},{url:"assets/scripting_placement-prevention.md.4f86a805.lean.js",revision:null},{url:"assets/scripting_resources.md.fc48b7a8.js",revision:null},{url:"assets/scripting_resources.md.fc48b7a8.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.2185918e.js",revision:null},{url:"assets/scripting_saving-loading.md.2185918e.lean.js",revision:null},{url:"assets/scripting_script-modules.md.6559da0f.js",revision:null},{url:"assets/scripting_script-modules.md.6559da0f.lean.js",revision:null},{url:"assets/scripting_script-net.md.e51ac4bd.js",revision:null},{url:"assets/scripting_script-net.md.e51ac4bd.lean.js",revision:null},{url:"assets/scripting_script-server.md.7d2d295d.js",revision:null},{url:"assets/scripting_script-server.md.7d2d295d.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.2cec2b71.js",revision:null},{url:"assets/scripting_script-watchdog.md.2cec2b71.lean.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.bd4a41da.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.bd4a41da.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.e63296af.js",revision:null},{url:"assets/scripting_scripting-intro.md.e63296af.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.c1f5a4b2.js",revision:null},{url:"assets/scripting_starting-scripts.md.c1f5a4b2.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.c6345703.js",revision:null},{url:"assets/scripting_troubleshooting.md.c6345703.lean.js",revision:null},{url:"assets/scripting_typescript.md.a313d4e6.js",revision:null},{url:"assets/scripting_typescript.md.a313d4e6.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.b462f3aa.js",revision:null},{url:"assets/scripting_what-is-script.md.b462f3aa.lean.js",revision:null},{url:"assets/servers_index.md.1f4a85c8.js",revision:null},{url:"assets/servers_index.md.1f4a85c8.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.1fda0f36.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.1fda0f36.lean.js",revision:null},{url:"assets/servers_server-software.md.27ef9967.js",revision:null},{url:"assets/servers_server-software.md.27ef9967.lean.js",revision:null},{url:"assets/style.e435f849.css",revision:null},{url:"assets/test.md.adec8a3d.js",revision:null},{url:"assets/test.md.adec8a3d.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.5ec1032b.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.5ec1032b.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.cb0bb97d.js",revision:null},{url:"assets/visuals_animation-effects.md.cb0bb97d.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.9542f2da.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.9542f2da.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.bbb0db64.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.bbb0db64.lean.js",revision:null},{url:"assets/visuals_death-animations.md.98298be2.js",revision:null},{url:"assets/visuals_death-animations.md.98298be2.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.6f5de44f.js",revision:null},{url:"assets/visuals_glowing-texture.md.6f5de44f.lean.js",revision:null},{url:"assets/visuals_index.md.b262e761.js",revision:null},{url:"assets/visuals_index.md.b262e761.lean.js",revision:null},{url:"assets/visuals_introduction.md.40a6ae1d.js",revision:null},{url:"assets/visuals_introduction.md.40a6ae1d.lean.js",revision:null},{url:"assets/visuals_leash-position.md.24938cc3.js",revision:null},{url:"assets/visuals_leash-position.md.24938cc3.lean.js",revision:null},{url:"assets/visuals_material-creations.md.e70905e9.js",revision:null},{url:"assets/visuals_material-creations.md.e70905e9.lean.js",revision:null},{url:"assets/visuals_materials.md.5b002f9d.js",revision:null},{url:"assets/visuals_materials.md.5b002f9d.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.dc474987.js",revision:null},{url:"assets/visuals_math-based-animations.md.dc474987.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.53af7d5e.js",revision:null},{url:"assets/visuals_player-geometry.md.53af7d5e.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.fdd382cc.js",revision:null},{url:"assets/visuals_remove-shadows.md.fdd382cc.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.ef5910aa.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.ef5910aa.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.bb5927e6.js",revision:null},{url:"assets/visuals_structure-presentation.md.bb5927e6.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.6b586c8a.js",revision:null},{url:"assets/vr_editing-your-first-model.md.6b586c8a.lean.js",revision:null},{url:"assets/vr_index.md.34c60bfb.js",revision:null},{url:"assets/vr_index.md.34c60bfb.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.7b3fc0b9.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.7b3fc0b9.lean.js",revision:null},{url:"assets/vr_pack_setup.md.d5a91e9b.js",revision:null},{url:"assets/vr_pack_setup.md.d5a91e9b.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.d8d093ee.js",revision:null},{url:"assets/world-generation_biome-tags.md.d8d093ee.lean.js",revision:null},{url:"assets/world-generation_biomes.md.83529812.js",revision:null},{url:"assets/world-generation_biomes.md.83529812.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.3fb3bacc.js",revision:null},{url:"assets/world-generation_custom-ores.md.3fb3bacc.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.e0d5181e.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.e0d5181e.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.4d3cfcde.js",revision:null},{url:"assets/world-generation_feature-types.md.4d3cfcde.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.edc2a7a4.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.edc2a7a4.lean.js",revision:null},{url:"assets/world-generation_index.md.aa2692d6.js",revision:null},{url:"assets/world-generation_index.md.aa2692d6.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.cbfbd021.js",revision:null},{url:"assets/world-generation_structure-features.md.cbfbd021.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.bd38c2ca.js",revision:null},{url:"assets/world-generation_surface-builder.md.bd38c2ca.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.740c5507.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.740c5507.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
