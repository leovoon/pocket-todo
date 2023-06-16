import { z } from "zod";
import type { Prisma } from "@prisma/client";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const QueryModeSchema = z.enum(["default", "insensitive"]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const TodoScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "completed",
  "createdAt",
  "updatedAt",
]);

export const TransactionIsolationLevelSchema = z.enum([
  "ReadUncommitted",
  "ReadCommitted",
  "RepeatableRead",
  "Serializable",
]);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// TODO SCHEMA
/////////////////////////////////////////

export const TodoSchema = z.object({
  id: z.number().int(),
  title: z.string().min(1).max(255),
  completed: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Todo = z.infer<typeof TodoSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// TODO
//------------------------------------------------------

export const TodoSelectSchema: z.ZodType<Prisma.TodoSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    completed: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const TodoWhereInputSchema: z.ZodType<Prisma.TodoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TodoWhereInputSchema),
        z.lazy(() => TodoWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TodoWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TodoWhereInputSchema),
        z.lazy(() => TodoWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    completed: z
      .union([z.lazy(() => BoolFilterSchema), z.boolean()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const TodoOrderByWithRelationInputSchema: z.ZodType<Prisma.TodoOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      completed: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const TodoWhereUniqueInputSchema: z.ZodType<Prisma.TodoWhereUniqueInput> =
  z
    .object({
      id: z.number().int().optional(),
    })
    .strict();

export const TodoOrderByWithAggregationInputSchema: z.ZodType<Prisma.TodoOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      completed: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => TodoCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => TodoAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => TodoMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => TodoMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => TodoSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const TodoScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TodoScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => TodoScalarWhereWithAggregatesInputSchema),
          z.lazy(() => TodoScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => TodoScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => TodoScalarWhereWithAggregatesInputSchema),
          z.lazy(() => TodoScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
        .optional(),
      title: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      completed: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const TodoCreateInputSchema: z.ZodType<Prisma.TodoCreateInput> = z
  .object({
    title: z.string().min(3, { message: "Too short man" }),
    completed: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const TodoUncheckedCreateInputSchema: z.ZodType<Prisma.TodoUncheckedCreateInput> =
  z
    .object({
      id: z.number().int().optional(),
      title: z.string(),
      completed: z.boolean().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const TodoUpdateInputSchema: z.ZodType<Prisma.TodoUpdateInput> = z
  .object({
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    completed: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  })
  .strict();

export const TodoUncheckedUpdateInputSchema: z.ZodType<Prisma.TodoUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      completed: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const TodoCreateManyInputSchema: z.ZodType<Prisma.TodoCreateManyInput> =
  z
    .object({
      id: z.number().int().optional(),
      title: z.string(),
      completed: z.boolean().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const TodoUpdateManyMutationInputSchema: z.ZodType<Prisma.TodoUpdateManyMutationInput> =
  z
    .object({
      title: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      completed: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const TodoUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TodoUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      completed: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.union([z.number().array(), z.number()]).optional(),
    notIn: z.union([z.number().array(), z.number()]).optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.union([z.string().array(), z.string()]).optional(),
    notIn: z.union([z.string().array(), z.string()]).optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
      .optional(),
  })
  .strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z
  .object({
    equals: z.coerce.date().optional(),
    in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
    notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
      .optional(),
  })
  .strict();

export const TodoCountOrderByAggregateInputSchema: z.ZodType<Prisma.TodoCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      completed: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const TodoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TodoAvgOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const TodoMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TodoMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      completed: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const TodoMinOrderByAggregateInputSchema: z.ZodType<Prisma.TodoMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      completed: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const TodoSumOrderByAggregateInputSchema: z.ZodType<Prisma.TodoSumOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional(),
      in: z.union([z.number().array(), z.number()]).optional(),
      notIn: z.union([z.number().array(), z.number()]).optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedIntFilterSchema).optional(),
      _max: z.lazy(() => NestedIntFilterSchema).optional(),
    })
    .strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.union([z.string().array(), z.string()]).optional(),
      notIn: z.union([z.string().array(), z.string()]).optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> =
  z
    .object({
      equals: z.boolean().optional(),
      not: z
        .union([
          z.boolean(),
          z.lazy(() => NestedBoolWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedBoolFilterSchema).optional(),
      _max: z.lazy(() => NestedBoolFilterSchema).optional(),
    })
    .strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
      notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional(),
    })
    .strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> =
  z
    .object({
      set: z.boolean().optional(),
    })
    .strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.coerce.date().optional(),
    })
    .strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> =
  z
    .object({
      set: z.number().optional(),
      increment: z.number().optional(),
      decrement: z.number().optional(),
      multiply: z.number().optional(),
      divide: z.number().optional(),
    })
    .strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.union([z.number().array(), z.number()]).optional(),
    notIn: z.union([z.number().array(), z.number()]).optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.union([z.string().array(), z.string()]).optional(),
    notIn: z.union([z.string().array(), z.string()]).optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
      notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
        .optional(),
    })
    .strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional(),
      in: z.union([z.number().array(), z.number()]).optional(),
      notIn: z.union([z.number().array(), z.number()]).optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedIntFilterSchema).optional(),
      _max: z.lazy(() => NestedIntFilterSchema).optional(),
    })
    .strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.union([z.number().array(), z.number()]).optional(),
    notIn: z.union([z.number().array(), z.number()]).optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedFloatFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.union([z.string().array(), z.string()]).optional(),
      notIn: z.union([z.string().array(), z.string()]).optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> =
  z
    .object({
      equals: z.boolean().optional(),
      not: z
        .union([
          z.boolean(),
          z.lazy(() => NestedBoolWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedBoolFilterSchema).optional(),
      _max: z.lazy(() => NestedBoolFilterSchema).optional(),
    })
    .strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
      notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const TodoFindFirstArgsSchema: z.ZodType<Prisma.TodoFindFirstArgs> = z
  .object({
    select: TodoSelectSchema.optional(),
    where: TodoWhereInputSchema.optional(),
    orderBy: z
      .union([
        TodoOrderByWithRelationInputSchema.array(),
        TodoOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: TodoWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: TodoScalarFieldEnumSchema.array().optional(),
  })
  .strict();

export const TodoFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TodoFindFirstOrThrowArgs> =
  z
    .object({
      select: TodoSelectSchema.optional(),
      where: TodoWhereInputSchema.optional(),
      orderBy: z
        .union([
          TodoOrderByWithRelationInputSchema.array(),
          TodoOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: TodoWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: TodoScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const TodoFindManyArgsSchema: z.ZodType<Prisma.TodoFindManyArgs> = z
  .object({
    select: TodoSelectSchema.optional(),
    where: TodoWhereInputSchema.optional(),
    orderBy: z
      .union([
        TodoOrderByWithRelationInputSchema.array(),
        TodoOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: TodoWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: TodoScalarFieldEnumSchema.array().optional(),
  })
  .strict();

export const TodoAggregateArgsSchema: z.ZodType<Prisma.TodoAggregateArgs> = z
  .object({
    where: TodoWhereInputSchema.optional(),
    orderBy: z
      .union([
        TodoOrderByWithRelationInputSchema.array(),
        TodoOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: TodoWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const TodoGroupByArgsSchema: z.ZodType<Prisma.TodoGroupByArgs> = z
  .object({
    where: TodoWhereInputSchema.optional(),
    orderBy: z
      .union([
        TodoOrderByWithAggregationInputSchema.array(),
        TodoOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: TodoScalarFieldEnumSchema.array(),
    having: TodoScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const TodoFindUniqueArgsSchema: z.ZodType<Prisma.TodoFindUniqueArgs> = z
  .object({
    select: TodoSelectSchema.optional(),
    where: TodoWhereUniqueInputSchema,
  })
  .strict();

export const TodoFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TodoFindUniqueOrThrowArgs> =
  z
    .object({
      select: TodoSelectSchema.optional(),
      where: TodoWhereUniqueInputSchema,
    })
    .strict();

export const TodoCreateArgsSchema: z.ZodType<Prisma.TodoCreateArgs> = z
  .object({
    select: TodoSelectSchema.optional(),
    data: z.union([TodoCreateInputSchema, TodoUncheckedCreateInputSchema]),
  })
  .strict();

export const TodoUpsertArgsSchema: z.ZodType<Prisma.TodoUpsertArgs> = z
  .object({
    select: TodoSelectSchema.optional(),
    where: TodoWhereUniqueInputSchema,
    create: z.union([TodoCreateInputSchema, TodoUncheckedCreateInputSchema]),
    update: z.union([TodoUpdateInputSchema, TodoUncheckedUpdateInputSchema]),
  })
  .strict();

export const TodoCreateManyArgsSchema: z.ZodType<Prisma.TodoCreateManyArgs> = z
  .object({
    data: z.union([
      TodoCreateManyInputSchema,
      TodoCreateManyInputSchema.array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TodoDeleteArgsSchema: z.ZodType<Prisma.TodoDeleteArgs> = z
  .object({
    select: TodoSelectSchema.optional(),
    where: TodoWhereUniqueInputSchema,
  })
  .strict();

export const TodoUpdateArgsSchema: z.ZodType<Prisma.TodoUpdateArgs> = z
  .object({
    select: TodoSelectSchema.optional(),
    data: z.union([TodoUpdateInputSchema, TodoUncheckedUpdateInputSchema]),
    where: TodoWhereUniqueInputSchema,
  })
  .strict();

export const TodoUpdateManyArgsSchema: z.ZodType<Prisma.TodoUpdateManyArgs> = z
  .object({
    data: z.union([
      TodoUpdateManyMutationInputSchema,
      TodoUncheckedUpdateManyInputSchema,
    ]),
    where: TodoWhereInputSchema.optional(),
  })
  .strict();

export const TodoDeleteManyArgsSchema: z.ZodType<Prisma.TodoDeleteManyArgs> = z
  .object({
    where: TodoWhereInputSchema.optional(),
  })
  .strict();
