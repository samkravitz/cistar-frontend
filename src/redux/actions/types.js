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
    CAMEO_TABLE_COMPLETE:       'CAMEO_TABLE_COMPLETE'
}

export default Types