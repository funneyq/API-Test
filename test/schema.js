module.exports = {
    type: "array",
    title: "The root schema",
    additionalItems: true,
    items: {
        $id: "#/items",
        anyOf: [
                {
                $id: "#/items/anyOf/0",
                type: "object",
                title: "The first anyOf schema",
                required: [
                        "bands"
                ],
                    properties: {
                        bands: {
                            $id: "#/items/anyOf/0/properties/bands",
                            type: "array",
                            title: "The bands schema",
                            additionalItems: true,
                            items: {
                                $id: "#/items/anyOf/0/properties/bands/items",
                                anyOf: [
                                    {
                                        $id: "#/items/anyOf/0/properties/bands/items/anyOf/0",
                                        type: "object",
                                        title: "The first anyOf schema",
                                        required: [
                                            "name",
                                            "recordLabel"
                                        ],
                                        properties: {
                                            name: {
                                                $id: "#/items/anyOf/0/properties/bands/items/anyOf/0/properties/name",
                                                type: "string",
                                                title: "The name schema",
                                            },
                                            recordLabel: {
                                                $id: "#/items/anyOf/0/properties/bands/items/anyOf/0/properties/recordLabel",
                                                type: "string",
                                                title: "The recordLabel schema",
                                            }
                                        },
                                        additionalProperties: true
                                    }
                                ]
                            }
                        }
                    },
                    additionalProperties: true
                },
                {
                    $id: "#/items/anyOf/1",
                    type: "object",
                    title: "The second anyOf schema",
                    required: [
                        "name",
                        "bands"
                    ],
                    properties: {
         
                        bands: {
                            $id: "#/items/anyOf/1/properties/bands",
                            type: "array",
                            title: "The bands schema",
                            additionalItems: true,
                            items: {
                                $id: "#/items/anyOf/1/properties/bands/items",
                                anyOf: [
                                    {
                                        $id: "#/items/anyOf/1/properties/bands/items/anyOf/0",
                                        type: "object",
                                        title: "The first anyOf schema",
                                        required: [
                                            "name",
                                            "recordLabel"
                                        ],
                                        
                                        additionalProperties: true
                                    },
                                    {
                                        $id: "#/items/anyOf/1/properties/bands/items/anyOf/1",
                                        type: "object",
                                        title: "The second anyOf schema",
                                        required: [
                                            "name"
                                        ],
                      
                                        additionalProperties: true
                                    }
                                ]
                            }
                        }
                    },
                    additionalProperties: true
                }
            ]
        }
    } 