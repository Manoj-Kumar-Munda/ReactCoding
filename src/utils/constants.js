export const comments = [
  {
    user: "AlphaQueen",
    comment: "First Comment",
  },
    {
      user: "Alpha001",
      comment: "Second Comment",
      replies: [
        {
          user: "Beta001",
          comment: "Second comment reply",
          replies: [
            {
              user: "Gamma01",
              comment: "reply to the reply on the second comment",
            },
          ],
        },
      ],
    },

  {
    user: "Mr. Gogo",
    comment: "Third comment",
    replies: [
      {
        user: "Bob",
        comment: "Third comment reply",
        replies: [
          {
            user: "Jack",
            comment:"reply to the reply on the third comment",
        
          },
          {
            user: "Chhotu",
            comment:"reply to the reply on the third comment",
            replies: [
                {
                    user:"Motu",
                    comment:"reply to...... on the third comment",

                }
            ]
          }
        ],
      },
    ],
  },
];
