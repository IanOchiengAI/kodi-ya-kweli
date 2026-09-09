import type { InspectionItem } from '@/types';

export const DEFAULT_INSPECTION_ITEMS: Omit<InspectionItem, 'moveInCondition' | 'moveOutCondition' | 'moveInNotes' | 'moveOutNotes'>[] = [
  // GENERAL / WHOLE UNIT
  { id: 'gen-1', room: 'general', itemLabel: 'Main entrance door & deadbolts', standardDescription: 'Door closes firmly, locks operate smoothly, all keys present' },
  { id: 'gen-2', room: 'general', itemLabel: 'Windows & glass panes', standardDescription: 'All panes intact, handles and latches latch securely, no cracks' },
  { id: 'gen-3', room: 'general', itemLabel: 'Electricity sub-meter initial reading', standardDescription: 'Record exact kWh reading at move-in/out to prevent billing disputes' },
  { id: 'gen-4', room: 'general', itemLabel: 'Water meter initial reading', standardDescription: 'Record exact cubic metre (m³) reading at handover' },
  { id: 'gen-5', room: 'general', itemLabel: 'Keys handed over count', standardDescription: 'Count main gate, unit door, security grill, and mailbox keys' },

  // LIVING ROOM
  { id: 'lr-1', room: 'living-room', itemLabel: 'Walls — paint & plaster finish', standardDescription: 'No deep holes, moisture bubbling, or structural cracks' },
  { id: 'lr-2', room: 'living-room', itemLabel: 'Ceiling condition', standardDescription: 'No water staining, sagging plasterboards, or mildew patches' },
  { id: 'lr-3', room: 'living-room', itemLabel: 'Floor tiles / screed', standardDescription: 'No cracked tiles, loose grouting, or uneven surface trips' },
  { id: 'lr-4', room: 'living-room', itemLabel: 'Sockets & switches', standardDescription: 'All faceplates secure, no burning marks, power verified' },
  { id: 'lr-5', room: 'living-room', itemLabel: 'Balcony railing & drainage', standardDescription: 'Balcony railing securely welded, drainage hole clear' },

  // BEDROOM 1
  { id: 'bd1-1', room: 'bedroom-1', itemLabel: 'Walls & paint finish', standardDescription: 'Clean finish, reasonable wear, no large drill holes' },
  { id: 'bd1-2', room: 'bedroom-1', itemLabel: 'Built-in wardrobes & drawers', standardDescription: 'Hinges aligned, drawers slide freely, handles intact' },
  { id: 'bd1-3', room: 'bedroom-1', itemLabel: 'Floor tiles & skirting', standardDescription: 'Tile integrity intact, skirting boards firmly attached' },
  { id: 'bd1-4', room: 'bedroom-1', itemLabel: 'Light fixtures & switches', standardDescription: 'Bulb holders undamaged, switches toggle smoothly' },

  // BEDROOM 2
  { id: 'bd2-1', room: 'bedroom-2', itemLabel: 'Walls & paint finish', standardDescription: 'Clean finish, no wall stains or water seepage' },
  { id: 'bd2-2', room: 'bedroom-2', itemLabel: 'Wardrobe fittings', standardDescription: 'Shelving secure, hanging rails properly supported' },
  { id: 'bd2-3', room: 'bedroom-2', itemLabel: 'Window latch & glass', standardDescription: 'Closes weatherproof, burglar bars secure' },

  // KITCHEN
  { id: 'kt-1', room: 'kitchen', itemLabel: 'Kitchen sink, drain & mixer taps', standardDescription: 'No leaks underneath P-trap, good water pressure, drain flows freely' },
  { id: 'kt-2', room: 'kitchen', itemLabel: 'Countertop & backsplashes', standardDescription: 'Granite/tile surface intact without deep burns or chips' },
  { id: 'kt-3', room: 'kitchen', itemLabel: 'Kitchen cabinets & shelving', standardDescription: 'Cabinet doors close flush, shelves clean and sturdy' },
  { id: 'kt-4', room: 'kitchen', itemLabel: 'Gas cylinder storage & ventilation', standardDescription: 'Ventilation vents unobstructed, pipe pass-through intact' },

  // BATHROOM
  { id: 'bth-1', room: 'bathroom', itemLabel: 'Toilet bowl, cistern & flush mechanism', standardDescription: 'Cistern refills without running continuously, seat firmly anchored' },
  { id: 'bth-2', room: 'bathroom', itemLabel: 'Shower, instant heater & taps', standardDescription: 'No electrical hazard on instant shower, mixer functional' },
  { id: 'bth-3', room: 'bathroom', itemLabel: 'Floor tiles & water fall-gradient', standardDescription: 'Water flows towards floor drain without pooling in corners' },
  { id: 'bth-4', room: 'bathroom', itemLabel: 'Basin, mirror & accessory rails', standardDescription: 'Basin securely anchored, mirror silvering clean, rails tight' },

  // EXTERIOR
  { id: 'ext-1', room: 'exterior', itemLabel: 'Designated parking bay / compound area', standardDescription: 'Clean and free of oil spills or debris' },
  { id: 'ext-2', room: 'exterior', itemLabel: 'Drying area / clotheslines', standardDescription: 'Lines intact, peg basket and hooks functional' },
];
