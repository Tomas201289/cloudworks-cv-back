"use strict";

module.exports = {
  allMembers: async () => {
    try {
      const professionals = [];

      const members = await strapi.entityService.findMany(
        "api::professional.professional",
        {
          fields: [
            "id",
            "name",
            "last_name",
            "job_title",
            "quote",
            "about_me",
            "publishedAt",
          ],
          populate: {
            avatar: {
              fields: ["url"],
            },
          },
        }
      );

      members.forEach((member) => {
        if (member.publishedAt != null) {
          professionals.push(member);
        }
      });

      return professionals;
    } catch (err) {
      return err;
    }
  },

  findMember: async (ctx) => {
    try {
      const professional = await strapi.entityService.findOne(
        "api::professional.professional",
        ctx.params.id,
        {
          fields: [
            "id",
            "name",
            "last_name",
            "job_title",
            "quote",
            "about_me",
            "publishedAt",
          ],
          populate: {
            avatar: {
              fields: ["url"],
            },
            languages: {
              populate: {
                language: {
                  fields: ["name"],
                },
                percentage: {
                  fields: ["value"],
                },
              },
            },
            abilities: {
              populate: {
                ability: {
                  fields: ["name"],
                },
                percentage: {
                  fields: ["value"],
                },
              },
            },
            work_experience: true,
          },
        }
      );

      professional.languages = professional.languages.map((language) => {
        return {
          language: language.language.name,
          percentage: language.percentage.value,
        };
      });

      professional.abilities = professional.abilities.map((ability) => {
        return {
          ability: ability.ability.name,
          percentage: ability.percentage.value,
        };
      });

      return professional;
    } catch (err) {
      return err;
    }
  },
};
