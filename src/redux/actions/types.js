const Types = {
    // compound types
    SET_REACTANT:               'SET_REACTANT',
    SET_PRODUCT:                'SET_PRODUCT',
    SET_DILUENT:                'SET_DILUENT',

    SET_NUM_REACTANTS:          'SET_NUM_REACTANTS',
    SET_NUM_PRODUCTS:           'SET_NUM_PRODUCTS',
    SET_NUM_DILUENTS:           'SET_NUM_DILUENTS',

    // operating param types
    SET_TEMPERATURE:            'SET_TEMPERATURE',    
    SET_PRESSURE:               'SET_PRESSURE',
    SET_PHYSICAL_STATE:         'SET_PHYSICAL_STATE',
    SET_HEAT_OF_REACTION:       'SET_HEAT_OF_REACTION',
    SET_CP:                     'SET_CP',
    SET_REACTION_CLASS:         'SET_REACTION_CLASS',
    SET_REACTION_SCALE:         'SET_REACTION_SCALE',
    SET_KEY_REACTANT_QUANTITY:  'SET_KEY_REACTANT_QUANTITY',

    // report types
    SET_HNUMS:                  'SET_HNUMS',
    SET_MATRIX:                 'SET_MATRIX',
    SET_REACTION_INFO:          'SET_REACTION_INFO',
    SET_CAMEO_TABLE:            'SET_CAMEO_TABLE',

    // status types
    CALCULATION_IN_PROGRESS:    'CALCULATION_IN_PROGRESS',
    CALCULATION_COMPLETE:       'CALCULATION_COMPLETE',
    REPORT_COMPLETE:            'REPORT_COMPLETE',

    CALCULATION_BLOCK_COMPLETE: 'CALCULATION_BLOCK_COMPLETE',
    HAZARD_MATRIX_COMPLETE:     'HAZARD_MATRIX_COMPLETE',
    CAMEO_TABLE_COMPLETE:       'CAMEO_TABLE_COMPLETE',
    OPEN_MODAL:                 'OPEN_MODAL',
    CLOSE_MODAL:                'CLOSE_MODAL',

    // side reaction types
    SET_SIDE_REACTION_NUM:      'SET_SIDE_REACTION_NUM',
    SET_SIDE_REACTION:          'SET_SIDE_REACTION',

    // error types
    SET_CAMEO_ERRORS:           'SET_CAMEO_ERRORS',
    SET_MATRIX_ERRORS:          'SET_MATRIX_ERRORS',
    SET_CALCULATION_ERRORS:     'SET_CALCULATION_ERRORS',

    // route types
    SET_HOME:                   'SET_HOME',
    SET_USER_GUIDE:             'SET_USER_GUIDE',
    SET_PUBLICATIONS:           'SET_PUBLICATIONS',

}

export default Types